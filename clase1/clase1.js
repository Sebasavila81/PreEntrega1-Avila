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

let nota_una= prompt("Ingrese primer nota");
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

