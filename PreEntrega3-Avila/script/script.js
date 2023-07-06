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

// fetch, then y catch, para obtener el valor del dolar blue
let dolar = fetch(URL)
.then((res) => res.json() )
.then ((data) => data.filter( (d) => d.casa.nombre=="Dolar Blue"))
.catch((e) => console.log(e))

//función asíncrona que se encarga de la conversión a dólar, nos permite obtener solo el valor de venta, que es el que nos interesa
async function ventaDolar(){
let valorDolar = await dolar
valorDolar = parseFloat(valorDolar[0].casa.venta)
return valorDolar
}

//Se lo asignamos a una variable global
let dolarVenta = 0
ventaDolar().then(e => dolarVenta=e)

//variable para guardar la habitación que elije el usuario
let habitacionElegida;
//definimos el carrito
let carrito = [];

//traemos el carousel que se va a encargar de pasar cada etapa de la reserva
let carousel = document.querySelector("#carouselReserva");

//con esta función llamamos al toastify, por defecto el tipo es de "error", pero si enviamos otro tipo lo va a tomar como éxito (success)

function mostrarToastify(texto,tipo='fail'){
  Toastify({
    text: texto,
    //usamos condicional ternario para la comprobación
    backgroundColor: tipo=='fail' ? "red" : "green",
    offset: {
      y: 50 
    },
    position: "center"
  }).showToast();
}

//función para calcular la diferencia de días entre dos fechas
function calcularDias(date1, date2){
date1 = new Date(date1)
date2 = new Date(date2)
 let calcDia = 1000 * 60 * 60 * 24;
 let diffMs = Math.abs(date2 - date1)
 return Math.round(diffMs / calcDia)
}

//función para sumar o restar días
function sumaRestaDia(date1, dias){
  date1 = new Date(date1)
  date1.setDate(date1.getDate(date1) + dias)
  return date1.toLocaleString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'});
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
  console.log(itemPrev)
  if (itemPrev) {
    itemActivo.classList.remove("active");
    itemPrev.classList.add("active");
  }
//Agregar acá un seguimiento de estado

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
        if(comprobarDisponibilidad(habitacionElegida,fechaEntrada.value,fechaSalida.value,cantCamas.value)){
        nextCarousel();

        agregarHabitacionCarrito(
          habitacionElegida,
          fechaEntrada.value,
          fechaSalida.value,
          cantCamas.value
        );
        
      }
    } else {
    // en caso de que haya un error con las fechas, mostramos los toasts correspondientes
        mostrarToastify("Revise la fecha de salida.")
      }
    } else {
      mostrarToastify("Es necesario definir las fechas.")
    }
  });

  //con este botón volvemos para atrás, si es necesario
  botonVolverHab.addEventListener("click", function(e){
    e.preventDefault()    
    e.stopPropagation();
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
        }
        // paso la variable flag a true, porque la reserva ya existe en el carrito
        yaExiste = true;
      }
    });
    //si la reserva no existe en el carrito, la creo
    if (!yaExiste) {
      carrito.push(habitacion);
      mostrarCarrito();
    }
  } else {
    mostrarToastify("Habitación no disponible.")
  }
}

//con esta función vamos a comprobar la disponibilidad de la habitación
function comprobarDisponibilidad(tipo, entrada, salida, camas) {
  let fechaEntrada = new Date(entrada);
  let fechaSalida = new Date(salida);
  let estaDisponible = true;
  let camasDisponibles = 0
  let existeReserva = false
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
          existeReserva = true
          return reserva
        }
      }
      );
      //si no existen reservas, comprobamos que estén disponibles las camas en la hab.
      if(!existeReserva){
        camasDisponibles = parseInt(habitacion.camas) - parseInt(camas);
        if (camasDisponibles>=0){
          estaDisponible=true
        } else {
          estaDisponible = false;
          mostrarToastify("No hay tantas camas. Disponibles: "+habitacion.camas)
        }
      }
      else{
        //vemos que tengamos camas disponibles
          camasDisponibles = parseInt(habitacion.camas) - parseInt(buscarFechas.camas) - parseInt(camas);

          if (camasDisponibles >= 0) {
            estaDisponible = true;
          } else {
            estaDisponible = false;
            mostrarToastify("No hay tantas camas. Disponibles: "+(parseInt(habitacion.camas) - parseInt(buscarFechas.camas) ))
          }
      }
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
  //en caso de que el carrito esté vacío, mostramos el mensaje, e impedimos que se avance con la reserva.
  mostrarToastify("El carrito se encuentra vacío.")
}
}

//función para setear los precios del carrito
function setearPrecios(idReserva,reserva){
//asignamos todos los campos dinámicos de valores a variables, así no repetimos código
  let dias = document.querySelector(`#dias-${idReserva}`)
//debajo de cada elemento, colocamos el valor deseado. En este caso cantidad de días.
  dias.innerHTML = calcularDias(reserva.fechaEntrada, reserva.fechaSalida)
  let precioUSD = document.querySelector(`#precio-usd-${idReserva}`)
//calculamos el precio en dólares
  precioUSD.innerHTML = calcularPrecio(reserva).toLocaleString('en-us',{style: "currency",currency: "USD"})
  let precioARS = document.querySelector(`#precio-ars-${idReserva}`)
//el precio en pesos
  precioARS.innerHTML = (dolarVenta*calcularPrecio(reserva)).toLocaleString('en-us',{style: "currency",currency: "ARS"})
  let camas = document.querySelector(`#camas-${idReserva}`)
//actualizamos la cantidad de camas
  camas.innerHTML = reserva.camas

}


//función para calcular el total del pago
function calcularTotal(carrito){
  let total = 0
  for(reserva of carrito){
    total = total + calcularPrecio(reserva)
  }
  return total.toLocaleString('en-us',{style: "currency",currency: "USD"})
}
//funcion para mostrar carrito reserva
function mostrarCarrito() {
  let tabla = document.getElementById("tbody");
  tabla.innerHTML = "";

  //por cada resrva del carrito, creamos una fila
  for (let [index, reserva] of carrito.entries()) {
    let fila = document.createElement("tr");

    //creamos la fila. Algunas observaciones:
    //usamos calcularDias para mostrar los días en lugar de las fechas de entrada y salida. Agregamos un botón de + y de - para poder modificarlo sobre la marcha al momento de ver la reserva.
    //usamos toLocalString para formatear los números y mostrarlos en moneda
    fila.innerHTML = `<td></td>
                          <td><p>${reserva.tipoHab}</p></td>
                          <td>
                          <button type="button" class="btn btn-default link-primary" id="btn-minus-${index}"> - </button>
                          <span id="dias-${index}"></span>
                          <button type="button" class="btn btn-default link-primary" id="btn-plus-${index}"> + </button>


                          </td>
                          <td>
                          <button type="button" class="btn btn-default link-primary" id="btn-minus-camas-${index}"> - </button>
                          <span id="camas-${index}">${reserva.camas}</span>
                          <button type="button" class="btn btn-default link-primary" id="btn-plus-camas-${index}"> + </button>
                          </td>
                          
                          <td><span id="precio-usd-${index}"></span></td>
                          <td><span id="precio-ars-${index}"></span></td>
                          <td><button class="btn btn-danger borrarReserva">Borrar</button></td>`;
    tabla.append(fila);
    //Cargamos los valores de cálculo:
    setearPrecios(index,reserva)
    //Agregamos los listeners a medida que creamos las filas
    let btnMinus = document.querySelector(`#btn-minus-${index}`);
    btnMinus.addEventListener('click',(e) => {
      if (calcularDias(reserva.fechaEntrada, reserva.fechaSalida)>1){
      reserva.fechaSalida = sumaRestaDia(reserva.fechaSalida,-1)
      setearPrecios(index,reserva)
      } else {
    //Si intentamos restar más días de los posibles, mostramos un error.
        mostrarToastify("No puede restar más días.")
      }
    })

    //Repetimos algo similar para la suma de días
    let btnPlus = document.querySelector(`#btn-plus-${index}`);
      btnPlus.addEventListener('click',(e) => {
      reserva.fechaSalida = sumaRestaDia(reserva.fechaSalida,1)
      setearPrecios(index,reserva)
    })
    
    //hacemos algo similar para restar camas
    let btnCamasMinus = document.querySelector(`#btn-minus-camas-${index}`)
    btnCamasMinus.addEventListener('click',(e) => {
      if(parseInt(reserva.camas)>1){
      reserva.camas=parseInt(reserva.camas)-1
      setearPrecios(index,reserva)
      reserva.camas = String(reserva.camas)
    }
      else{
    //si tenemos menos a 1 cama, mostramos un error
        mostrarToastify("No puede restar más camas.")
      }
    })

    //hacemos algo similar para el botón de sumar camas
    let btnCamasPlus = document.querySelector(`#btn-plus-camas-${index}`)
    btnCamasPlus.addEventListener('click',(e) => {
      e.preventDefault()
      e.stopImmediatePropagation()
    //antes de realizar la suma, comprobamos la disponibilidad de camas para esa reserva
      if(comprobarDisponibilidad(reserva.tipoHab, reserva.fechaEntrada, reserva.fechaSalida, reserva.camas)){
      reserva.camas=parseInt(reserva.camas)+1
      setearPrecios(index,reserva)
      reserva.camas = String(reserva.camas)
      }
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

    //Agregamos los listeners para finalizar la reserva y para poder volver para atrás
  let finalizar = document.getElementById("pago-reserva");
  finalizar.addEventListener("click", mostrarPago);
  finalizar.style.display = "block";
  const botonVolverFechas = document.getElementById('volver-reserva-fechas');
  botonVolverFechas.addEventListener("click", function(e){
    e.preventDefault()
    prevCarousel()
  })

}

function mostrarPago(){
  if (carrito.length>0){
    nextCarousel()
  }
  //Agregamos los listeners para finalizar la reserva y para poder volver para atrás
  let finalizar = document.getElementById("finalizar-reserva");
  finalizar.addEventListener("click", finalizarReserva);
  finalizar.style.display = "block";
  const botonVolverItems = document.getElementById('volver-carrito-fechas');
  botonVolverItems.addEventListener("click", function(e){
    e.preventDefault()
    prevCarousel()
  })
  let montoTotal = document.getElementById('monto-pago')
  montoTotal.innerHTML = calcularTotal(carrito)
}

// iniciamos el programa
realizarReserva();
