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