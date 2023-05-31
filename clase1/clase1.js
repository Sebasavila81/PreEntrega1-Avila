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
/* class Habitacion {
  constructor(nombre, precio, camas) {
    this.nombre = nombre;
    this.precio = precio;
    this.camas = camas;
  }

  getDatos() {
    console.log("<---------------->");
    console.log("Nombre: ", this.nombre);
    console.log("Precio: ", this.precio);
    console.log("Cantidad de camas: ", this.camas);
    console.log("");
  }

  getCamas() {
    if (this.camas <= 0) {
      return false;
    } else {
      return true;
    }
  }

  reservaCama(cantHuespedes) {
    if (this.camas >= cantHuespedes) {
      this.camas -= cantHuespedes;
      return true;
    } else {
      return false;
    }
  }


}
function saludar() {
  let nombre = prompt("Ingrese su nombre");
  alert("Bienvenido/a: " + nombre + " a Izsla Hotel");
}
saludar();

let listaHabitaciones = [];

listaHabitaciones.push(new Habitacion("Mixta", 10, 20));
listaHabitaciones.push(new Habitacion("Femenina", 15, 10));
listaHabitaciones.push(new Habitacion("Privada", 50, 5));

console.log("Habitaciones Disponibles");

for (let habitacion of listaHabitaciones) {
  habitacion.getDatos();
}

function buscarHabitacion(habitacion) {
  return habitacion.nombre === reservaHuesped;
}

let reservaHuesped = prompt("Ingrese el nombre de la habitación donde desea reservar cama");

let resultadoBusqueda = listaHabitaciones.find(buscarHabitacion);

if (undefined !== resultadoBusqueda) {
  if (resultadoBusqueda.getCamas()) {
    let cantHuespedes = prompt("Para cuántos huéspedes desea reservar cama en esa habitación");
    if (resultadoBusqueda.reservaCama(cantHuespedes)) {
      console.log(`Gracias por reservar ${cantHuespedes} camas de la habitación ${resultadoBusqueda.nombre}`);
    } else {
      console.log("No se puede realizar la reserva");
      console.log("Tenemos:", resultadoBusqueda.camas);
    }
  } else {
    console.log("No tenemos camas disponibles en:", resultadoBusqueda.nombre);
  }
} else {
  console.log("No se encontró la habitación:", reservaHuesped);
}

console.log("Habitaciones Disponibles");

for (let habitacion of listaHabitaciones) {
  habitacion.getDatos();
}
 */