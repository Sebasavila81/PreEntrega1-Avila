let habitaciones = [];

//Buscamos la base de datos en el LocalStorage

if (localStorage.getItem("habitaciones")) {
  let habitacionesJson = localStorage.getItem("habitaciones");
  habitaciones = JSON.parse(habitacionesJson);
  console.log(habitaciones);
}
//Si no existe, la creamos por primera vez.
else {
  habitaciones = [
    {
      nombre: "mixta",
      camas: 20,
      precio: 10,
      reservas: [{ fechaInicio: "", fechaFin: "", camas: 0 }],
    },
    {
      nombre: "femenina",
      camas: 10,
      precio: 12,
      reservas: [{ fechaInicio: "", fechaFin: "", camas: 0 }],
    },
    {
      nombre: "privada",
      camas: 4,
      precio: 50,
      reservas: [{ fechaInicio: "", fechaFin: "", camas: 0 }],
    },
  ];
}

//variables globales

//Obtenemos el valor del dólar del día de hoy
const URL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

let dolar = fetch(URL)
.then((res) => res.json() )
.then ((data) => data.filter( (d) => d.casa.nombre=="Dolar Blue"))
.catch((e) => console.log(e))

//función asíncrona que se encarga de la conversión a dólar
async function convertirDolar(){
let valorDolar = await dolar
valorDolar = parseFloat(valorDolar[0].casa.venta)
return valorDolar
}

let dolarVenta = 0
convertirDolar().then(e => dolarVenta=e)

//variable para guardar la habitación que elije el usuario
let habitacionElegida;
//definimos el carrito
let carrito = [];

//traemos el carousel que se va a encargar de pasar cada etapa de la reserva
let carousel = document.querySelector("#carouselReserva");

//con esta función llamamos al toastify

function mostrarToastify(texto,tipo='fail'){
  Toastify({
    text: texto,
    backgroundColor: tipo=='fail' ? "red" : "green",
    offset: {
      y: 50 
    },
    position: "center"
  }).showToast();
}

function calcularDias(date1, date2){
date1 = new Date(date1)
date2 = new Date(date2)
 let calcDia = 1000 * 60 * 60 * 24;
 let diffMs = Math.abs(date2 - date1)
 return Math.round(diffMs / calcDia)
}

function sumaRestaDia(date1, dias = 1){
  date1 = new Date(date1)
  date1.setDate(date1.getDate(date1) + dias)
  return date1;
}

//con esta función, pasamos a la siguiente parte de la reserva moviendo el slide del carousel
function nextCarousel() {
  let itemActivo = carousel.querySelector(".carousel-item.active");
  let itemSig = itemActivo.nextElementSibling;
  if (itemSig) {
    itemActivo.classList.remove("active");
    itemSig.classList.add("active");
  }
}

//con esta otra, hacemos lo contrario, volvemos al paso previo
function prevCarousel() {
  let itemActivo = carousel.querySelector(".carousel-item.active");
  let itemPrev = itemActivo.previousElementSibling;
  if (itemPrev) {
    itemActivo.classList.remove("active");
    itemPrev.classList.add("active");
  }
}

//funcion iniciar el programa
function realizarReserva() {
  let fechasCamas = document.getElementsByClassName("btnFechas");

  //por cada boton de reserva de Habitacion despliego la seleccion de fechas y camas
  for (i = 0; i < fechasCamas.length; i++) {
    fechasCamas[i].addEventListener("click", function (e) {
      //movemos el carousel
      nextCarousel();
      habitacionElegida = e.target.id;
    });
  }

  //capto los nodos de fechas y personas
  let fechaEntrada = document.querySelector("#datepicker-entrada");
  let fechaSalida = document.querySelector("#datepicker-salida");
  let cantCamas = document.querySelector("#inlineFormSelectPref");

  const botonReserva = document.querySelector("#boton-reserva");
  const botonVolverHab = document.querySelector('#volver-reserva-habitaciones')

  //creo un evento y llamo a la funcion agregar habitacion
  botonReserva.addEventListener("click", function (e) {
    e.preventDefault();

    //compruebo que el usuario haya elegido fecha de entrada y fecha de salida
    if (fechaEntrada.value && fechaSalida.value) {
    //y si eligió, me fijo que la fecha de la salida no sea menor o igual a la de la entrada
      if (new Date(fechaSalida.value) - new Date(fechaEntrada.value) > 0) {
        nextCarousel();

        agregarHabitacionCarrito(
          habitacionElegida,
          fechaEntrada.value,
          fechaSalida.value,
          cantCamas.value
        );
        
      } else {
        mostrarToastify("Revise la fecha de salida.")
        console.log("la fecha de salida no puede ser menor a la de entrada.");
      }
    } else {
      mostrarToastify("Es necesario definir las fechas.")
      console.log("Es necesario definir las fechas.");
    }
  });

  //con este botón volvemos para atrás, si es necesario
  botonVolverHab.addEventListener("click", function(e){
    e.preventDefault()
    prevCarousel()
  })
}

//funcion para crear un objeto de cada reserva
function agregarHabitacionCarrito(tipo, entrada, salida, camas) {
  let habitacion = {
    tipoHab: tipo,
    fechaEntrada: entrada,
    fechaSalida: salida,
    camas: camas,
  };
  //compruebo la disponibilidad de la habitación, según la base de datos
  let disponible = comprobarDisponibilidad(tipo, entrada, salida, camas);
  if (disponible) {
    //si está disponible en la base de datos, también veamos que no exista ya en el carrito
    let yaExiste = false;
    //para eso, recorro todos los objetos del carrito con el método map
    carrito.map((reserva) => {
      if (
        //si existe
        reserva.tipoHab == habitacion.tipoHab &&
        reserva.fechaEntrada == habitacion.fechaEntrada &&
        reserva.fechaSalida == habitacion.fechaSalida
      ) {
        //entonces calculo la suma de las nuevas camas
        let nuevasCamas = parseInt(reserva.camas) + parseInt(habitacion.camas);

        if (
        // si esa cantidad total de camas es menor o igual a los que dispone la habitación
          nuevasCamas <=
          habitaciones.find((hab) => hab.nombre == habitacion.tipoHab).camas
        ) {
        //modifico la cantidad de camas y muestro el carrito
          reserva.camas = nuevasCamas;
          mostrarCarrito();
        }else {
        // si es mayor, entonces muestro que no tenemos tantas camas
        mostrarToastify("No hay tantas camas")
        console.log("no hay tantas camas")
        }
        // paso la variable flag a true, porque la reserva ya existe en el carrito
        yaExiste = true;
      }
    });
    //si la reserva no existe en el carrito, la creo
    if (!yaExiste) {
      console.log(reserva.camas);
      carrito.push(habitacion);
      mostrarCarrito();
    }
  } else {
    mostrarToastify("Habitación no disponible.")
    console.log("habitación no disponible");
  }
}

//con esta función vamos a comprobar la disponibilidad de la habitación
function comprobarDisponibilidad(tipo, entrada, salida, camas) {
  let fechaEntrada = new Date(entrada);
  let fechaSalida = new Date(salida);
  let estaDisponible = true;

  //busco la habitación
  const buscarHabitacion = habitaciones.find(function (habitacion) {
    if (habitacion.nombre === tipo) {
  //busco si existe esa reserva en esa habitación, para poder luego agregarla o no al carrito
      const buscarFechas = habitacion.reservas.find(function (reserva) {
        let fechaInicioReserva = new Date(reserva.fechaInicio);
        let fechaFinReserva = new Date(reserva.fechaFin);
        if (
          fechaEntrada >= fechaInicioReserva &&
          fechaSalida <= fechaFinReserva
        ) {
        //vemos que tengamos camas disponibles
          let camasDisponibles = habitacion.camas - reserva.camas - camas;

          if (camasDisponibles >= 0) {
            estaDisponible = true;
          } else {
            estaDisponible = false;
            mostrarToastify("No hay tantas camas. Disponibles: "+camasDisponibles)
            console.log(camasDisponibles);
          }
        }
      });
    }
  });
  return estaDisponible;
}

//funcion para calcular el precio
function calcularPrecio(reserva) {
  let precio = habitaciones.find(function (habitacion) {
    if (habitacion.nombre === reserva.tipoHab) {
      return habitacion.precio;
    }
  }).precio;

  let fechaEntrada = new Date(reserva.fechaEntrada);
  let fechaSalida = new Date(reserva.fechaSalida);
  let totalDias = fechaSalida - fechaEntrada;
  totalDias = totalDias / (1000 * 60 * 60 * 24);
  return precio * reserva.camas * totalDias;
}

//función para finalizar la reserva
function finalizarReserva() {
  if (carrito.length>0){
    nextCarousel()
 //agrego las reservas del carrito a nuestra base de datos
  for (let reserva of carrito) {
    habitaciones.find(function (habitacion) {
      if (habitacion.nombre === reserva.tipoHab) {
        habitacion.reservas.push({
          fechaInicio: reserva.fechaEntrada,
          fechaFin: reserva.fechaSalida,
          camas: reserva.camas,
        });
      }
    });
  }
  //convertimos a json y guardamos en el localStorage
  let habitacionesJson = JSON.stringify(habitaciones);
  localStorage.setItem("habitaciones", habitacionesJson);
  mostrarToastify("Reserva finalizada","success")
}
else{
  mostrarToastify("El carrito se encuentra vacío.")
}
}

//funcion para mostrar carrito reserva
function mostrarCarrito() {
  let tabla = document.getElementById("tbody");
  tabla.innerHTML = "";

  //por cada resrva del carrito, creamos una fila
  for (let [index, reserva] of carrito.entries()) {
    console.log(typeof(new Date(reserva.fechaEntrada)))
    console.log(dolarVenta)
    let fila = document.createElement("tr");
    fila.innerHTML = `<td></td>
                          <td><p>${reserva.tipoHab}</p></td>
                          <td>
                          <span class="input-group-btn">
                          <button type="button" class="btn btn-default" id="btn-minus-${index}">
                              <span class="glyphicon glyphicon-minus">-</span>
                          </button>
                          </span>
                          <span id="dias-${index}">
                          ${calcularDias(reserva.fechaEntrada, reserva.fechaSalida)}
                          </span>
                          <span class="input-group-btn">
                          <button type="button" class="btn btn-default" id="btn-plus-${index}">
                              <span class="glyphicon glyphicon-plus">+</span>
                          </button>
                          </span>

                          </td>
                          <td>${reserva.camas}</td>
                          <td>${calcularPrecio(reserva).toLocaleString('en-us',{style: "currency",currency: "USD"})}</td>
                          <td>${(dolarVenta*calcularPrecio(reserva)).toLocaleString('en-us',{style: "currency",currency: "ARS"})}</td>
                          <td><button class="btn btn-danger borrarReserva">Borrar</button></td>`;
    tabla.append(fila);

    let btnMinus = document.querySelector(`#btn-minus-${index}`);
    btnMinus.addEventListener('click',(e) => {
      if (calcularDias(reserva.fechaEntrada, reserva.fechaSalida)>1){
      reserva.fechaSalida = sumaRestaDia(reserva.fechaSalida,-1)
      let dias = document.querySelector(`#dias-${index}`)
      dias.innerHTML = calcularDias(reserva.fechaEntrada, reserva.fechaSalida)
      } else {
        mostrarToastify("No puede restar más días.")
      }
    })

    let btnPlus = document.querySelector(`#btn-plus-${index}`);
    btnPlus.addEventListener('click',(e) => {
      reserva.fechaSalida = sumaRestaDia(reserva.fechaSalida,1)
      let dias = document.querySelector(`#dias-${index}`)
      dias.innerHTML = calcularDias(reserva.fechaEntrada, reserva.fechaSalida)

    })
  }

  //traemos todos los botones de borrar (un array de botones)
  let btnBorrar = document.querySelectorAll(".borrarReserva");

  //recorremos ese array de botones
  for (let i = 0; i < btnBorrar.length; i++) {
    //agregamos un listener a cada elemento del array
    btnBorrar[i].addEventListener("click", function (e) {
      //buscamos el elemento abuelo de ese botón
      let abuelo = e.target.parentNode.parentNode;
      //eliminamos el elemento abuelo
      abuelo.remove();
      //eliminamos la reserva correspondiente del carrito
      carrito.splice(i, 1);
      //mostramos el toast
      mostrarToastify("Habitación eliminada de la reserva.",'success')
      //si el carrito está vacío, mostramos el mensaje
      if (carrito.length<1){
        tabla.innerHTML=`<td colspan=7 style="text-align: center">Carrito vacío.</td>`
      }
    });
  }

  let finalizar = document.getElementById("finalizar-reserva");
  finalizar.addEventListener("click", finalizarReserva);
  finalizar.style.display = "block";
  const botonVolverFechas = document.getElementById('volver-reserva-fechas');
  botonVolverFechas.addEventListener("click", function(e){
    e.preventDefault()
    prevCarousel()
  })
}

// iniciamos el programa
realizarReserva();
