/* Actividad 1 */
/* let nombre = "Homero";
let apellido = "Simpson";
let edad = 39; */

/* Actividad 2 */
/* const NEW_YORK = "Nueva York";
const LONDON = "Londres";
const PARIS = "París";
const SYDNEY = "Sídney";
const TOKYO = "Tokio"; */

/* Actividad 3 */
/* let nombre = "Sebastian";
let apellido = "Avila";
let direccion = "Av. lisandro de la Torre 5454";
let pais = "Argentina";
let dni = "28642806";
let fecha_nacimiento = "06/01/1981";
let carnet = "nombre" + nombre + "apellido" + apellido + "vive en" + direccion + "pais" + pais + "dni" + dni + "fecha de nacimiento" + fecha_nacimiento 
console.log(carnet); */

/* Actividad 4 */
/* let nombre_flia1 = prompt("Ingrese el primer nombre de integrante de su flia");
let nombre_flia2 = prompt("Ingrese el segundo nombre de integrante de su flia");
let nombre_flia3 = prompt("Ingrese el tercer nombre de integrante de su flia");
let nombre_flia4 = prompt("Ingrese el cuarto nombre de integrante de su flia");
let nombre_flia5 = prompt("Ingrese el quinto nombre de integrante de su flia");
let familia = nombre_flia1 + nombre_flia2 + nombre_flia3 +nombre_flia4 + nombre_flia5; 
alert(familia);
 */
/* Actividad 5 */
/* let precio = parseInt(prompt("Ingrese un precio"));

let desc20 = precio - (precio * 0.20);
let desc30 = precio - (precio * 0.30);

console.log(desc20);
console.log(desc30);
 */
/* Actividad 1 */
/* Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.
 */
/* Notas actividad 1
El valor del nombre a comparar es a elección. Recordemos que con la sentencia if podemos determinar qué bloque se ejecuta en el programa. */

/* let entrada = prompt("Ingrese un nombre");
let nombre = "Bart";

if(entrada == nombre){
    alert("Fui yo");

}
else{
    alert("Yo no fui");
} */
/* Actividad 2 */
/* Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.
Notas actividad 2
En JS 'y' minúscula  es distinto de 'Y' mayúscula. Si queremos verificar ambas comparaciones en un if, es necesario emplear el operador booleano  && (and)
 */

/* let tecla = prompt("Ingrese una tecla");
if(tecla == "Y" || tecla == "y"){
    alert("Correcto");

}
else{
    alert("Error");
}
 */

/* Actividad 3 */
/* Solicitar al usuario un (1) número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.
Notas actividad 3
Todo valor que ingresa por prompt es un string. Si queremos verificar si es un número (obviando el tipo de dato), se recomienda siempre comparar por igualdad parcial (==). */

/* let numero =parseInt(prompt ("Ingrese un numero"));
if(numero <= 4 && numero >= 1){
    if(numero == 1){
        alert("Elegiste a Homero");
    }
    else if(numero == 2){
        alert("Marge");
    }
    else if(numero == 3){
        alert("Bart");
    }
    else{
        alert("Lisa");
    }
}
else{
    alert("Error");
} */

/* Actividad 4*/
/* Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.
Notas actividad 4
Para determinar si un número está entre otros dos (intervalo), hay que usar las comparaciones menor que (<) y mayor que (>). 
 */
/* let numero = parseInt(prompt("Ingrese un numero"));
if(numero > 0 && numero <= 1000){
    alert("Presupuesto bajo");
}
else if(numero >= 1001 && numero <= 3000){
    alert("Presupuesto medio");
}
else if(numero > 3000){
    alert("Presupuesto alto");

}
else{
    alert("Error");
} */

/* Actividad 5*/
/* Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.
Para asegurarnos de que una variable string no esté vacía, podemos comparar (variable != ""). Luego, agrupar estas validaciones en un if, con el operador booleano  && (and) */

/* let producto1 = prompt("Ingrese un producto");
let producto2 = prompt("Ingrese un producto");
let producto3 = prompt("Ingrese un producto");
let producto4 = prompt("Ingrese un producto");

if(producto1 != "" && producto2 != "" && producto3 != "" && producto4 != ""){
    let listado = "1) " + producto1 + " " + "2)" + producto2 + " " +
    "3) " + producto3 + " " +
    "4) " + producto4;
    console.log(listado);

}
else{
    "Error: es necesario cargar todos los productos"
} */
/* Actividad 1*/
/* Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.
Cuando decimos “por cada repetición”, estamos señalando la necesidad de emplear ciclos. Si el ciclo está condicionado por un número de repeticiones, se usa for.
 */
/* let numero = prompt("Ingrese la cantidad de repeticiones");
let texto = prompt("ingrese un texto a repetir");

for(let i = 0; i < numero; i = i + 1){
    alert(texto);
} */
/* Actividad 2*/
/* Solicitar al usuario un (1) número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.
Es importante distinguir entre el número máximo de repeticiones de un for. y un condicional cuyo cumplimiento puede provocar la interrupción del bucle (con break). */
/* let lados = prompt("Ingrese cantidad de lados");
for(i = 0; i < lados ; i = i + 1){
    if(lados > 3){
        break;
    }
    alert("lado");
    
} */
/* Actividad 3*/
/* let alumnos = "";
for(i = 0 ; i < 10 ; i = i + 1){
    alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
}
alert(alumnos); */
/* Actividad 4*/
/* let entrada = prompt("Ingrese un nombre");
let ingresados = "";
while(entrada != "Voldemort"){
    ingresados += entrada +"\n";
    entrada = prompt("Ingrese un nombre");
    
}
alert(ingresados); */
/* Actividad 5*/
/* Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.
Es importante distinguir entre el valor de la entrada que asegura la repetición (entrada != “ESC”), y los posibles valores de la entrada que disparan un procesamiento (1,2,3 y 4). */

/* let producto = prompt("Ingrese un numero del 1 al 4 o ESC para salir");

while (producto !== "ESC") {
    producto = parseInt(producto);
    if (producto === 1) {
        alert("Tomate");
        
    }
    else if (producto === 2) {
        alert("Papa");
        
    }
    else if (producto === 3) {
        alert("Carne");
        
    }
    else if (producto === 4) {
        alert("Pollo");
        
    }
    else{
        alert("Error");
    }
    producto = parseInt(prompt("Ingrese un numero del 1 al 4"));
}
alert("Hasta luego"); */
/* Actividad 1*/

/* function entrada(){
    let nombre = prompt("Ingrese su nombre");
    return nombre
}
function transformacion(nombre){
    nombre = "mi nombre es: " + nombre;
    return nombre
}
function salida(nombre){
    console.log(nombre);
}

let nombreEntrada = entrada()
let entradaTransformada = transformacion(nombreEntrada)
salida(entradaTransformada)

salida(transformacion(entrada())); */

/* Actividad 2*/

/* let decimal = 10.5
let redondeo = Math.round(decimal)

console.log(redondeo) */

/* function redondeo(decimal){
    return Math.round(decimal);
}
for(i = 0 ; i < 5 ; i++){
    let decimal = prompt("Ingrese un numero decimal");
    console.log(redondeo(decimal));
}
 */
/* Actividad 3*/
/* function impuesto(precio, porcentaje){
    return precio +(precio * (porcentaje/100));
   

    
}

for(i = 0 ; i < 5 ; i++){
    let precio =parseInt(prompt("ingrecio el precio"));
    let porcentaje = parseInt(prompt("Ingrese porcentaje"));
    console.log(impuesto(precio, porcentaje));
} */

/* Actividad 4*/
/* Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.
 */
/* let cotizacion = 480;

function cotizarDolar(pesos){
    dolar = pesos * cotizacion;
    return dolar;
}
function cotizarPesos(dolar){
    pesos = dolar / cotizacion;
    return pesos;
}
let valor = prompt("ingrese un valor");
let moneda = prompt("Ingrese una moneda");
if(moneda == "dolar"){
console.log(cotizarDolar(valor))
}
else{
    console.log(cotizarPesos(valor))
}

const COTIZACION_DOLAR = 150;

const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;

function cotizarDolar (pesos) { 
    return pesos / COTIZACION_DOLAR;
} */
/* Actividad 5*/
/* Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.
Es común emplear funciones para validar si un valor recibido por parámetro cumple con cierto formato. La comparación de cadena vacía es (cadena != ‘’) */

/* function validacion(cadena){
    return cadena != "";
    
}
let entrada = prompt("Ingreses cadena");
while( entrada != "ESC"){
    alert(validacion(entrada));
    entrada = prompt("Ingreses cadena");
} */
/* Actividad 1*/
/* Declarar un clase Tienda que permita registrar:
Nombre de la tienda.
Dirección de la tienda.
Propietario de la tienda.
Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando esta clase.
Por cada dato a registrar en un objeto, corresponde una propiedad. Recordemos que la invocación del objeto es instanciarlo usando new y el constructor.
 */
/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;

    }
} */
/* let tienda1 = new Tienda ("carlitos", "av los incas 3232", "juan", "almacen");
let tienda2 = new Tienda ("josesito", "av los incas 4343", "armando", "kiosko");
let tienda3 = new Tienda ("ricardo", "av los incas 5252", "Juan", "verduleria");

console.log(tienda1);
console.log(tienda2);
console.log(tienda3); */

/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;

    }
}
let ingresados = '';
for (let index = 0; index < 5; index++) {
    let tienda = new Tienda(prompt("NOMBRE"),
        prompt("DIRECCION"),
        prompt("PROPIETARIO"),
        prompt("RUBRO"));

    ingresados += "Tienda: " + tienda.nombre + " " +
        "Direccion: " + tienda.direccion + " " +
        "Propitario: " + tienda.propietario + " " +
        "rubro: " + tienda.rubro + "\n";
}
alert(ingresados); */

/* Actividad 2*/
/* Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.
Es posible instanciar objetos de forma local en un bloque, y los valores pasados por parámetro al constructor pueden ser capturados desde una llamada prompt. */

/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;

    }
}
let ingresados = ""
for(i = 0 ; i < 5 ; i++){
    let tienda1 = new Tienda (prompt("Ingrese nombre"), 
                                prompt("Ingrese direccion"),
                                prompt("Ingrese propietario"), 
                                prompt("Ingrese Rubro"));

    ingresados = ingresados + "\n nombre: "+ tienda1.nombre + "direccion" + tienda1.direccion + "propietario: " + tienda1.propietario + "rubro : " + tienda1.rubro;

}
alert(ingresados); */
/* Actividad 3*/
/* Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada.
Considerando que por prompt sólo podemos ingresar cadenas, se sugiere asumir que se trabaja sólo con horas en punto, de 0 a 22. El if debe verificar dos intervalos válidos.
 */
/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;

    }
    estaAbierto(hora){
        if(hora >= 8 && hora <= 12 || hora >= 15 && hora <= 19) {
            return true;

        }
        else{
            return false;
        }
    }
}    
let tienda1 = new Tienda("Seba" , "Av. de los Incas 3232" , "Juan" , "Kiosko");
for(i = 0 ; i < 3 ; i++){
    let horario = parseInt(prompt("Ingrese hora"));
    if(tienda1.estaAbierto(horario)){
        alert("Abierto");
    }
    else{
        alert("Cerrado");
    }
} */
/* Actividad 4*/
/* Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, se retorna false.
Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres. Informar por alerta si los nombres pertenecen a algún dueño de tienda.
Es común emplear métodos de clase para validar si un valor recibido por parámetro es igual al valor de una propiedad del objeto. Se llama el método por cada objeto creado */

/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;

    }
    esPropietario(nombre) {
        if (nombre == this.propietario) {
            return true;
        }
        else {
            return false;
        }
    }
}
let tienda1 = new Tienda("Seba", "Av. de los Incas 3232", "Juan", "Kiosko");
let tienda2 = new Tienda("Luis", "Callao 67", "Pepe", "Almacen");
let tienda3 = new Tienda("Marce", "Rivadavia 12", "Nelson", "Verduleria");

for (i = 0; i < 5; i++) {

    let propietario = prompt("Ingrese un nombre");
    if (propietario == tienda1.propietario || propietario == tienda2.propietario || propietario == tienda3.propietario) {
        alert("Es dueño");
    }
    else {
        alert("no es dueño");
    }
} */
/* Actividad 5*/
/* class Cliente {
    constructor(nombre, presupuesto, terjetaDesc, telefono){
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.terjetaDesc = terjetaDesc;
        this.telefono = telefono;
    }
    transferirDinero(valor) {
        if(valor < this.presupuesto && valor > 0){
            return this.presupuesto - valor;
        }
        else{
            return false;

        }
    }
} */
/* Actividad 1*/
/* Declarar un array de cadenas, compuesto por  los cuatro (4) nombres pertenecientes a los integrantes de un equipo. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.
Cuando recorremos un array, empleamos un bucle (preferentemente un for o for...of) para acceder a los elementos de la colección uno a uno. */

/* let equipo = ["Moe", "Homero", "Sr. Berns", "Apu"];
console.log(equipo);
for(let miembro of equipo){
    console.log(miembro);
} */
/* Actividad 2*/
/* Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de forma consecutiva,  hasta que se ingrese “ESC”. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.
Usando while  y prompt podemos cargar una colección de forma dinámica. Es decir, agregar al array en cada iteración la entrada capturada, usando el método push */
/* let equipo = [];
let nombre = prompt("Ingrese un nombre");
while(nombre != "ESC"){
    equipo.push(nombre);
    nombre = prompt("Ingrese un nombre");


}
for(i = 0 ; i < equipo.length ; i++){
    alert("El nombre es: " + equipo[i] + "la posicion es: " + i);
} */
/* Actividad 3*/

/* Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array. */


/* class jugador {
    constructor (nombre, numeroCamiseta, edad, lesionado){
        this.nombre = nombre;
        this.numeroCamiseta = numeroCamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}
let jugadores= [];

jugadores.push(new jugador("carlos", 2, 42, false));
jugadores.push(new jugador("perci", 5, 33, false));
jugadores.push(new jugador("alex", 4, 42, true));
jugadores.push(new jugador("mauro", 8, 37, false));
jugadores.push(new jugador("leo", 1, 48, true));

console.log(jugadores); */
/* Actividad 4*/
/* Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. La función retorna el jugador que coincide con el nombre.
Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, e informar sobre el resultado de cada búsqueda. */

/* function buscarJugador(equipo, jugador) {
    let resultado = equipo.find(
        function buscarRecorrido(obj){
            if(obj==jugador){
                return obj
            }
        }

    )
}

class jugador {
    constructor(nombre, numeroCamiseta, edad, lesionado) {
        this.nombre = nombre;
        this.numeroCamiseta = numeroCamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}
let equipo = []
equipo.push(new jugador("carlos", 2, 42, false));
equipo.push(new jugador("perci", 5, 33, false));
equipo.push(new jugador("alex", 4, 42, true));
equipo.push(new jugador("mauro", 8, 37, false));
equipo.push(new jugador("leo", 1, 48, true));

buscarJugador(equipo, 'carlos')

console.log(resultado);

function buscar_usuario( obj_usuario ){

    if(obj_usuario == "Marta"){
    return obj_usuario
    }
}

buscar_usuario("seba") */