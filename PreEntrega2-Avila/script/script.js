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

let habitaciones = [
    {
        nombre: "mixta", camas: 20, precio: 10,
        reservas: [{ fechaInicio: '07/07/2023', fechaFin: '07/10/2023', camas: 1 }]
    },
    { 
        nombre: "femenina", camas: 10, precio: 12, 
        reservas: [{ fechaInicio: '', fechaFin: '', camas: '' }] 
    },
    { 
        nombre: "privada", camas: 4, precio: 50, 
        reservas: [{ fechaInicio: '', fechaFin: '', camas: '' }] 
    }
];


let habitacionElegida


let carrito = []

//con esta función vamos a comprobar la disponibilidad de la habitación
function comprobarDisponibilidad(tipo, entrada, salida, camas) {
    let fechaEntrada = new Date(entrada);
    let fechaSalida = new Date(salida);

    for (let habitacion of habitaciones) {
        const buscarFechas = habitacion.reservas.find(function (reserva) {
            let fechaInicioReserva = new Date(reserva.fechaInicio);
            let fechaFinReserva = new Date(reserva.fechaFin);
            if (fechaEntrada >= fechaInicioReserva && fechaSalida <= fechaFinReserva) {
                console.log(reserva);
            }
        });
    }
}



//funcion para crear un objeto de cada reserva
function agregarHabitacionCarrito(tipo, entrada, salida, camas) {
    let habitacion = {'tipoHab' : tipo, 'fechaEntrada' : entrada, 'fechaSalida' : salida, 'camas' : camas}
    comprobarDisponibilidad(tipo, entrada, salida, camas)
    carrito.push(habitacion);
}


function realizarReserva() {
    let fechasCamas = document.getElementsByClassName("btnFechas");
    console.log(fechasCamas);
    //por cada boton de reserva de Habitacion despliego la seleccion de fechas y camas
    for (i = 0; i < fechasCamas.length; i++) {
        
        fechasCamas[i].addEventListener("click", function(e) {
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

realizarReserva();