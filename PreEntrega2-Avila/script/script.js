/* //Creo la clase para listar las habitaciones//
class Habitacion {
    constructor(nombre, precio, camas) {
        this.nombre = nombre;
        this.precio = precio;
        this.camas = camas;

    }
    //metodo para mostrar las habitaciones//
    getDatos() {
        let disponibilidad = `
\n<---------------->
Nombre :  ${this.nombre}
Precio :  ${this.precio}
Cantidad de camas :  ${this.camas}
`;
        return disponibilidad;
    }
    //Metodo para saber si hay camas disponibles//
    getCamas() {
        if (this.camas <= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    //Metodo para hacer la reserva de la cama y actualizar la dispo
    reservaCama(cantHuespedes) {
        if (this.camas >= cantHuespedes) {
            this.camas = this.camas - cantHuespedes;
            return true;

        }
        else {
            return false;
        }
    }
    //Metodo para calcular el costo de la Reserva//
    calcularCostoReserva(cantHuespedes) {
        return this.precio * cantHuespedes;
    }
}

//Funcion para Saludar
function Saludar() {
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido/a: " + nombre + " a Izsla Hotel");
}

//Variables Globales
let listaHabitaciones = [];
let finalizar = false
//Creo las instancias de Habitaciones//
listaHabitaciones.push(new Habitacion("Mixta", 10, 20));
listaHabitaciones.push(new Habitacion("Femenina", 15, 10));
listaHabitaciones.push(new Habitacion("Privada", 50, 5));

//Se saluda al usuario con su nombre//
let habitacionesDisponibles = []

while (!finalizar) {
    Saludar();


    //Se muestra la lista de Habitaciones para reservar//
    for (let habitaciones of listaHabitaciones) {
        habitacionesDisponibles.push(habitaciones.getDatos());
    }

    let reservaHuesped = prompt("Ingrese el nombre de la habitacion donde quiere reservar cama.\n" + "Habitaciones disponibles:" + habitacionesDisponibles);

    let resultadoBusqueda = listaHabitaciones.find((habitacion) => habitacion.nombre === reservaHuesped);
    if (resultadoBusqueda) {

        if (resultadoBusqueda.getCamas()) {
            let cantHuespedes = parseInt(prompt("Para cuantos huespedes desea reservar cama en esa habitacion"));
            if (isNaN(cantHuespedes)) {
                console.log("Ingrese un numero valido para la cantidad de huespedes");
            }
            else if (cantHuespedes > 0) {
                if (resultadoBusqueda.reservaCama(cantHuespedes)) {
                    let costoReserva = resultadoBusqueda.calcularCostoReserva(cantHuespedes);
                    console.log(`Gracias por reservar ${cantHuespedes} camas de la habitación ${resultadoBusqueda.nombre}`);
                    console.log(`El costo total de la reserva es: ${costoReserva}`);
                }
                else {
                    console.log("No se puede realizar la reserva");
                    console.log("Tenemos :", resultadoBusqueda.camas);
                }
            }



        }
        else {
            console.log("No tenemos camas dispoinibles en: ", resultadoBusqueda.nombre);
        }

    }
    else {
        console.log("No se encontro la habitacion: ", reservaHuesped);
    }

    for (let habitaciones of listaHabitaciones) {
        habitaciones.getDatos();
    }
    continuar = prompt("¿Desea continuar reservando? Ingrese SI o NO.")
    if (continuar == 'NO') {
        finalizar = true
    }
    habitacionesDisponibles = []
}
 let titulo = document.getElementById("titulo_principal");
console.log(titulo);
console.log(titulo.innerText);


let nombre_usuario = document.getElementById ("nombre_usuario");
nombre_usuario.value = "pepe" */

let habitaciones = []

//Buscamos la base de datos en el LocalStorage

if (localStorage.getItem("habitaciones")) {
    let habitacionesJson = localStorage.getItem("habitaciones");
    habitaciones = JSON.parse(habitacionesJson);
    console.log(habitaciones)
}
//Si no existe, la creamos por primera vez.
else {
    habitaciones = [
        {
            nombre: "mixta", camas: 20, precio: 10,
            reservas: [{ fechaInicio: '', fechaFin: '', camas: 0 }]
        },
        {
            nombre: "femenina", camas: 10, precio: 12,
            reservas: [{ fechaInicio: '', fechaFin: '', camas: 0 }]
        },
        {
            nombre: "privada", camas: 4, precio: 50,
            reservas: [{ fechaInicio: '', fechaFin: '', camas: 0 }]
        }
    ];
}

//variables globales

//variable para guardar la habitación que elije el usuario
let habitacionElegida
//definimos el carrito
let carrito = []


//funcion iniciar el programa
function realizarReserva() {
    let fechasCamas = document.getElementsByClassName("btnFechas");

    //por cada boton de reserva de Habitacion despliego la seleccion de fechas y camas
    for (i = 0; i < fechasCamas.length; i++) {

        fechasCamas[i].addEventListener("click", function (e) {
            let formFechas = document.querySelector(".displayForm");
            console.log(formFechas.style.display)
            if (formFechas.style.display) {
                formFechas.style.display = '';
            }
            else {
                formFechas.style.display = "block";
            }
            habitacionElegida = e.target.id
        })
    }


    //capto los nodos de fechas y personas

    let fechaEntrada = document.querySelector("#datepicker-entrada");
    let fechaSalida = document.querySelector("#datepicker-salida");
    let cantCamas = document.querySelector("#inlineFormSelectPref");

    let botonReserva = document.querySelector('#boton-reserva');

    //creo un evento y llamo a la funcion agregar habitacion
    botonReserva.addEventListener('click', function (e) {
        e.preventDefault()
        agregarHabitacionCarrito(
            habitacionElegida,
            fechaEntrada.value,
            fechaSalida.value,
            cantCamas.value);
    })




}

//funcion para crear un objeto de cada reserva
function agregarHabitacionCarrito(tipo, entrada, salida, camas) {
    let habitacion = { 'tipoHab': tipo, 'fechaEntrada': entrada, 'fechaSalida': salida, 'camas': camas }
    let disponible = comprobarDisponibilidad(tipo, entrada, salida, camas);
    if (disponible) {
        carrito.push(habitacion);
        mostrarCarrito();
    }


}

//con esta función vamos a comprobar la disponibilidad de la habitación
function comprobarDisponibilidad(tipo, entrada, salida, camas) {

    let fechaEntrada = new Date(entrada);
    let fechaSalida = new Date(salida);
    let estaDisponible = true

    const buscarHabitacion = habitaciones.find(function (habitacion) {
        if (habitacion.nombre === tipo) {
            const buscarFechas = habitacion.reservas.find(function (reserva) {
                let fechaInicioReserva = new Date(reserva.fechaInicio);
                let fechaFinReserva = new Date(reserva.fechaFin);
                if (fechaEntrada >= fechaInicioReserva && fechaSalida <= fechaFinReserva) {
                    let camasDisponibles = habitacion.camas - reserva.camas - camas;

                    if (camasDisponibles >= 0) {
                        estaDisponible = true
                    }
                    else {
                        estaDisponible = false
                        console.log(camasDisponibles)
                    }
                }
            })
        }

    });
    return estaDisponible
}

//funcion para calcular el precio
function calcularPrecio(reserva) {
    let precio = habitaciones.find(function (habitacion) {
        if (habitacion.nombre === reserva.tipoHab) {
            return habitacion.precio;
        }
    }).precio

    let fechaEntrada = new Date(reserva.fechaEntrada);
    let fechaSalida = new Date(reserva.fechaSalida);
    let totalDias = fechaSalida - fechaEntrada;
    totalDias = (totalDias / (1000 * 60 * 60 * 24));
    return precio * reserva.camas * totalDias;

}

//funcion para mostrar carrito reserva
function mostrarCarrito() {
    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";

    for (let reserva of carrito) {

        let fila = document.createElement("tr");
        fila.innerHTML = `<td></td>
                          <td><p>${reserva.tipoHab}</p></td>
                          <td>${reserva.fechaEntrada} hasta ${reserva.fechaSalida}</td>
                          <td>${reserva.camas}</td>
                          <td>${calcularPrecio(reserva)}</td>
                          <td><button class="btn btn-danger borrarReserva">Borrar</button></td>`;
        tabla.append(fila);

    }
    
    //traemos todos los botones de borrar (un array de botones)
    let btnBorrar = document.querySelectorAll(".borrarReserva");
    
    //recorremos ese array de botones
    for (let i=0; i < btnBorrar.length; i++){
    //agregamos un listener a cada elemento del array
        btnBorrar[i].addEventListener("click", function(e){
    //buscamos el elemento abuelo de ese botón
            let abuelo = e.target.parentNode.parentNode
    //eliminamos el elemento abuelo
            abuelo.remove()
    //eliminamos la reserva correspondiente del carrito
            carrito.splice(i,1)

        })
    }
    let finalizar = document.getElementById("finalizar-reserva");
    finalizar.addEventListener("click", finalizarReserva);
    finalizar.style.display='block';

}

function finalizarReserva(){
    for (let reserva of carrito) {
        let buscarHab = habitaciones.find(function (habitacion) {
            if (habitacion.nombre === reserva.tipoHab) {
                habitacion.reservas.push({fechaInicio : reserva.fechaEntrada, fechaFin : reserva.fechaSalida, camas : reserva.camas})
            } 
    })
}
    console.log(habitaciones)
    let habitacionesJson = JSON.stringify(habitaciones);
    localStorage.setItem("habitaciones", habitacionesJson);
    console.log(habitacionesJson)
}





realizarReserva();