

/* VARIABLES */
let cantidadHuespedes = 0;
let diasReserva = 0;
let precioPorDia = 10;
let esArgentino = 0;
let descuentoPorcentaje = 0;
let montoDesc = 0;
/* FUNCIONES */

/* FUCNION PARA SALUDAR */
function Saludar(){
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido/a: "+ nombre + " a Izsla Hotel");
}

/* FUNCION PARA CALCULAR EL TOTAL DE LA RESERVA */
function totalReserva(diasReserva, cantidadHuespedes) {
    let total = diasReserva * cantidadHuespedes * precioPorDia;
    montoDesc = total * descuentoPorcentaje;
    return total - montoDesc;
}
/* FUNCION QUE LE PIDE AL USUARIO DATOS */
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
/* FUNCION PARA CALCULAR EL DESCUENTO POR SER ARGENTINA */
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
/* INICIO DEL PROGRAMA*/
Saludar();
preguntarUsuario();

alert("Se realizo la reserva por: "+ diasReserva + " dias");
alert("para: "+ cantidadHuespedes+ " personas");
descuento();
alert("El total de la reserva es: $ "+ totalReserva(diasReserva, cantidadHuespedes));