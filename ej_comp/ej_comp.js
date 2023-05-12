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
