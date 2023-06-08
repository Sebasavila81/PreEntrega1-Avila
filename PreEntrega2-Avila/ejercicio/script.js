//let nombre_usuario = document.getElementById("nombre_usuario");

//nombre_usuario.value = "Pepe desde JS";

//console.log("Bienvenido/a al sistema: ", nombre_usuario.value);



/* function saludar(){

    let nombre_usuario = document.getElementById("nombre_usuario");


    console.log("Bienvenido/a al sistema: ", nombre_usuario.value);
}



function validar(){

    let nombre_usuario = document.getElementById("nombre_usuario");
    let msj = document.getElementById("mensaje");


    if(nombre_usuario.value == "Pepe"){

        let parrafo = document.createElement("p");
        parrafo.innerText = "Bienvenido/a al sistema" + nombre_usuario.value;
        parrafo.style.fontSize = "24px";
        msj.append(parrafo);
    }
    else{

        document.body.innerHTML = `<h2>ERROR DE USUARIO</h2>
                                   <p>El usuario ${nombre_usuario.value} no se encontro</p>
                                   <a href="clase9b.html">Volver</a>`;
    }


} */
/* let 

function agregar_producto() {
    let producto = document.getElementById("producto");
    let lista = document.getElementById("lista");
    
} */


function agregarProducto() {

    let producto = document.getElementById("producto").value;
    let lista = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerText = producto; 
    lista.appendChild(li);
    document.getElementById("producto").value = "";
    console.log(lista.innerHTML)
    console.log(lista)

    
    
    
    
   


    
  
}