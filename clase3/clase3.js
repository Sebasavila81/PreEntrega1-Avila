/* let nombre_usuario = prompt("Ingrese su nombre");
console.log("Bienvenido/a :", nombre_usuario);
 */

/* for(let i = 0 ; i < 3 ; i = i + 1){
    console.log("mensaje desde el bucle");
    console.log("Bienvenidos a la vuelta :", i);
} */

/* for(let i = 0 ; i < 5 ; i = i + 1){
    let nombre_usuario = prompt("Ingrese su nombre");
    console.log("Bienvenido/a :", nombre_usuario)
    console.log("Estamos en la vuelta :", i);
} */
/* let numero_usuario = prompt("Ingrese un numero y le muestro la tabla del mismo");
numero_usuario = parseInt(numero_usuario);
for (let i = 0; i < 11; i = i + 1) {
    let multi = (numero_usuario * i);
    console.log(numero_usuario, " x ", i, ":", multi)

} */
/* let usuario_registrado = "Pepe";
let intentos = 1;

for( i = 0 ; i < 5 ; i = i + 1){
    let nombre_usuario=prompt("ingrese nombre de usuario");

    if(nombre_usuario != usuario_registrado && intentos < 3) {
        console.log("Datos incorrectos");
        intentos = intentos + 1; 
        continue
    }
    if(intentos == 3) {
        console.log("CHAU TARJETA");
        break

    }
    if(nombre_usuario == usuario_registrado){
        console.log("Bienvenido/a :" , usuario_registrado);
        break
    }

} */

//let numero_ingresado = prompt("Ingrese un numero y le digo el siguiente");
//numero_ingresado = parseInt(numero_ingresado);
/*
while (numero_ingresado >= 0) {
    console.log(numero_ingresado + 1);
    numero_ingresado = prompt("Ingrese un numero y le digo el siguiente");
    numero_ingresado = parseInt(numero_ingresado);
}
*/
/* let numero = prompt("Ingrese un numero");
let suma = 0
suma = parseInt(suma);
numero = parseInt(numero);
suma = suma + numero;

while (suma <= 500) {
    console.log("Suma total:", suma);
    numero = prompt("Ingrese un numero");
    numero = parseInt(numero);
    suma = suma + numero;
} */
let totalVotosA = 0;
let totalVotosB = 0;
let totalNulos = 0;
for(i = 0 ; i < 10 ; i = i + 1){
    let voto = prompt("Realice su votacion A o B");
    if(voto == "A"){
        totalVotosA = totalVotosA + 1;
    } 
    else if(voto == "B"){
        totalVotosB = totalVotosB + 1;
    }
    else{
        totalNulos = totalNulos + 1;
    }
}
if(totalVotosA > totalVotosB){
    console.log("El partido ganador es A");

}
else if(totalVotosA < totalVotosB){
    console.log("El partido ganador es B");
}
else{
    console.log("Empate");
}