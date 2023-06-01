/* let nombre = "sebastian";
let apellido = "avila";
let resultado = nombre + apellido;
console.log( resultado );
let suma = 3 + 1
console.log (suma)
alert ("cuidado virus")
let nombre_usuario = prompt("Ingrese su nombre");
console.log("Bienvenido:" , nombre_usuario) */
/* let numero_uno = prompt("ingrese un numero");
let numero_dos = prompt("ingrese otro numero");
numero_uno = parseInt(numero_uno)
numero_dos = parseInt(numero_dos)

let suma = numero_uno + numero_dos;
console.log("el resultado es:", suma);  */
/* let numero_uno = prompt ("ingrese un numero")
let numero_dos = prompt ("ingrese otro numero")
numero_uno = parseInt (numero_uno);
numero_dos = parseInt (numero_dos);
if (numero_uno > numero_dos) {
    console.log ("gano el numero 1");

}
else {
    console.log ("gano el numero 2");
} */
/* let edad = prompt("ingrese su edad");
edad = parseInt (edad);
if(edad >= 18) {
    console.log("Bienvenido/a al sistema");
}
else {
    console.log("No puede ingresar al sistema");
} */

/* let nota_una= prompt("Ingrese primer nota");
let nota_dos=prompt("Ingrese segunda nota");
let estado=prompt("Ingrese SI/NO si es Regular");

nota_una=parseInt(nota_una);
nota_dos=parseInt(nota_dos);

let promedio=((nota_una+nota_dos)/2);

if(promedio >= 7 && estado == "SI") {
    console.log("APROBADO");
}
else if(promedio < 7 && promedio >= 4 && estado == "SI") {
    console.log("RECUPERA");
}
else if(promedio < 4 || estado == "NO") 
{
    console.log("RECURSA");
}
 */
/* class Habitacion {
    constructor(numero, tipo, capacidad, precio) {
      this.numero = numero;
      this.tipo = tipo;
      this.capacidad = capacidad;
      this.precio = precio;
      this.reservada = false;
    }
  
    reservar() {
      if (this.reservada) {
        console.log(`La habitación ${this.numero} ya está reservada.`);
      } else {
        this.reservada = true;
        console.log(`La habitación ${this.numero} ha sido reservada.`);
      }
    }
  
    cancelarReserva() {
      if (this.reservada) {
        this.reservada = false;
        console.log(`La reserva de la habitación ${this.numero} ha sido cancelada.`);
      } else {
        console.log(`La habitación ${this.numero} no está reservada actualmente.`);
      }
    }
  }
  
  // Objeto para almacenar las habitaciones y gestionar su estado de reserva
  const hostel = {
    habitaciones: [],
  
    agregarHabitacion(habitacion) {
      this.habitaciones.push(habitacion);
    },
  
    mostrarHabitacionesDisponibles() {
      const habitacionesDisponibles = this.habitaciones.filter(habitacion => !habitacion.reservada);
      console.log("Habitaciones disponibles:");
      habitacionesDisponibles.forEach(habitacion => {
        console.log(`- Habitación ${habitacion.numero}: ${habitacion.tipo}, capacidad: ${habitacion.capacidad}, precio: ${habitacion.precio}`);
      });
    }
  };
  
  // Crear instancias de habitaciones
  const habitacion1 = new Habitacion(101, 'individual', 1, 50);
  const habitacion2 = new Habitacion(201, 'doble', 2, 80);
  
  // Agregar las habitaciones al objeto hostel
  hostel.agregarHabitacion(habitacion1);
  hostel.agregarHabitacion(habitacion2);
  
  // Mostrar las habitaciones disponibles
  hostel.mostrarHabitacionesDisponibles();
  
  // Reservar una habitación
  habitacion1.reservar();
  
  // Mostrar las habitaciones disponibles después de la reserva
  hostel.mostrarHabitacionesDisponibles();
   */


//Creo la clase para listar las habitaciones//
/* class Habitacion {
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
} */