/* SALUDO */
console.log("Bienvenido a Izsla Hostel");
/* VARIABLES */
let cantidadHuespedes = 0;
let diasReserva = 0;
let precioPorDia = 10;
let esArgentino = 0;
let descuentoPorcentaje = 0;
let montoDesc = 0;
/* FUNCIONES */
function totalReserva(diasReserva, cantidadHuespedes) {
    let total = diasReserva * cantidadHuespedes * precioPorDia;
    montoDesc = total * descuentoPorcentaje;
    return total - montoDesc;
}

function preguntarUsuario() {

    while (cantidadHuespedes <= 0) {
        cantidadHuespedes = parseInt(prompt("Ingrese la cantidad de personas que se van a hospedar en Izsla Hostel"));

        if (isNaN(cantidadHuespedes) || cantidadHuespedes <= 0) {
            alert("Debe ingresar un número mayor a 0. Por favor, inténtelo de nuevo.");
            cantidadHuespedes = 0;
        }
    }

    while (diasReserva <= 0) {
        diasReserva = parseInt(prompt("Ingrese la cantidad de dias que desees hospedarse en Izsla Hostel"));

        if (isNaN(diasReserva) || diasReserva <= 0) {
            alert("Debe ingresar un número mayor a 0. Por favoer, Inténtelo de nuevo.");
            diasReserva = 0;
        }
    }
}

function descuento() {
    while (esArgentino != "SI" && esArgentino != "NO") {
        esArgentino = prompt("Ingrese SI o NO si es Argentino");
    }
    if (esArgentino == "SI") {
        descuentoPorcentaje = 0.1;
        console.log("Por ser Argentino tiene un descuento del: %", descuentoPorcentaje * 100);

    }
    else {
        descuentoPorcentaje = 0;

    }

}


preguntarUsuario();

console.log("Se realizo la reserva por: ", diasReserva, "dias");
console.log("para: ", cantidadHuespedes, "personas");
descuento();
console.log("El total de la reserva es: $", totalReserva(diasReserva, cantidadHuespedes));