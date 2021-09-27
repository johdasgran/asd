"use strict"


// var nombre = "Hola mi amor xd";

// console.log(nombre);

// alert(nombre);
// alert("Hola mor :3");


function saludo() {

    // let nombre = "Qué mas pues <3";
    // console.log(nombre);

    let saludo = "I want to be with you ❤️";
    console.log(saludo);
}

saludo();


var edad = "24.9";

// var suma = Number(edad);

// parseFloat(suma);
// var insuma = parseFloat(edad);

// console.log(insuma*10);


// var numero = 50;

// console.log(numero);

// var numeroTxt = String(numero);



// var fecha = new Date();

// var lider = {jefe:"bossLayer"}

// var persona = [
//     {nombre:"Sergio"},
//     {correo:"sertio@gmail.es"},
//     {telefono:317654897},
//     lider

// ]

// var personaJSON = JSON.stringify(persona);

// var newPersona = JSON.parse(personaJSON);


// var nombre, correo, telefono;

// var persona = [
//     nombre="Sergio",
//     correo="sertio@gmail.es",
//     telefono=317654897,

// ]


// console.log(persona[0])

// for(var a=0; a<persona.length; a++){

//     console.log("pumxd " + persona[a]);
//     document.write("- " + persona[a]+ " ");

// }



var datoA = 10;
var datoB = 20;

// if (datoA < datoB) {
//     console.log("El dato A es menor al dato B");
// }


// Operador ternario xd

// var resultado = datoA < datoB ? "10 es menor que 20" : "20 es mayor a 10";

// console.log(typeof resultado);

// var datos = {
//     nombre:"Johan",
//     edad:22,
//     telefono:111111111,
//     sexo:"Masculino",
//     dios:true
// }


// console.log(typeof datos.dios);

// if (datoA<datoB) {
//     console.log(datoA+" es menor a "+datoB);
// } else if (datoA == datoB) {
//     console.log(datoA+" es igual a "+datoB);
// } else {
//     console.log("Error xd");
// }

// // console.log(fecha.getDay());


// if (fecha.getDay()==1) {
//     console.log("Hoy es Lunes")
// } else if (fecha.getDay()==2) {
//     console.log("Hoy es Martes");
// } else if (fecha.getDay()==3) {
//     console.log("Hoy es Miercoles");
// } else if (fecha.getDay()==4) {
//     console.log("Hoy es Jueves");
// } else if (fecha.getDay()==5) {
//     console.log("Hoy es Viernes");
// } else if (fecha.getDay()==6) {
//     console.log("Hoy es Sabado");
// } else if (fecha.getDay()==7) {
//     console.log("Hoy es Domingo");
// } 


// var day = 6;

// switch (day) {
//     case 1:
//         console.log("Estamos en Enero");
//     break;
//     case 2:
//         console.log("Estamos en Febrero");
//     break;
//     case 3:
//         console.log("Estamos en Marzo");
//     break;
//     case 4:
//         console.log("Estamos en Abril");
//     break;
//     case 5:
//         console.log("Estamos en Mayo");
//     break;
//     case 6:
//         console.log("Estamos en Junio");
//     break;
//     default:
//         console.log("Elija un numero de mes del 1 al 12");
//     break;
// }



// var productos = "producto"; 

// for (let i = 1; i <= 5; i++) {
//     var pr = productos+" #"+[i];
//     console.log(pr);
//     debugger;
// }




// function saludar() {
//     return "Hola Baby :3";
// }


// :O parámetros REST

// function cocinar(ingrediente1, ingrediente2, ...masIngredientes){
//     console.log("Ingrediente 1 es: "+ingrediente1);
//     console.log("Ingrediente 2 es: "+ingrediente2);
//     console.log("Complementarios: ", ...masIngredientes)
// }

// cocinar("Arroz", "Papa", "Avichuela,", "Pechuga", "Lentejas,", "Pimienta");

// Funcion con parámetros SPREAD
//Y combinacion de REST = ...otros and SPREAD ...pasos

/*
function receta(ingrediente1, ingrediente2, ingrediente3, ...otros){
    console.log("Paso 1:  "+ingrediente1);
    console.log("Paso 2:  "+ingrediente2);
    console.log("Paos 3:  "+ingrediente3);
    console.log("Otros: " + otros);

}

var pasos=["Lavar las papas", "Pelar las papas"];

receta(...pasos, "Fritar las papas", "Carne", " Chorizo", " Salchicha", " Queso" );
*/

/// Funcion Anonima

// (
//     function(){
//         var mor = "Te amo :3";
//         console.log(mor);
//     }
// )()

var saludaMor = function () {
    return "Hola mor :3";
}

// Call backs

// function calculadora(a, b, sumarCB, restarCB) {
//     var suma = a + b;
//     var resta = a - b;
//     sumarCB(suma);
//     restarCB(resta);
// }

// calculadora(5, 3,
//     function (resultadoSuma) {
//         console.log("La suma es: " + resultadoSuma);
//     },
//     function (resultadoResta) {
//         console.log("La resta es: " + resultadoResta);
//     }
// );

// Funcion Arrow | Fat Arrow | Lambda

var helloName = nombre => "¡Hola " + nombre;
console.log(helloName("Sabrina!"));


// var multiplicacion = a => a * 5;
// console.log(multiplicacion(10));


// mas de un parametro

// var multiplicacion2 = (a, b) => a * b;
// console.log(multiplicacion2(3, 5));

// mas de una operacion

// var calculadora = (a, b) => {
//     var suma = a + b;
//     var resta = a - b;
//     var multi = a * b;
//     var divi = a / b;
//     return "Suma: " + suma + " Resta: " + resta + " Multiplicacion: " + multi + " Division: " + divi;
// };
// console.log(calculadora(5, 5));


// Sin parametros

// var sinParametros = () => {
//     return "The World of Sabrina";
// }

// console.log(sinParametros());


const boton = document.querySelector('.boton');

// boton.addEventListener('click', function () {
//     console.log(this.innerHTML);

// });

// boton.addEventListener('click', ()=>{
//     console.log(this);
//     this.location = "https://github.com/johdasgran"
// });


// Eventos mouse
/*
boton.addEventListener('click', function(){
    console.log("El boton se ha pulsado");
});

boton.addEventListener('mouseover', function(){
    console.log("El mouse esta sobre el boton");
});

boton.addEventListener('mouseout', function(){
    console.log("El mouse esta fuera el boton");
});*/


// Eventos del teclado

// keydown
// keypress
// keyup

// window.addEventListener("keydown", function (event) {
//     console.log("Pulso una tecla");
//     console.log(event.key);
// })

// window.addEventListener("keypress", function (event) {
//     console.log("Tecla presionadaaaaa");
// })

// window.addEventListener("keyup", function (event) {
//     console.log("Tecla levantada");


// // evento load
// window.addEventListener('load', function () {
//     console.log("El contenido de la ventana de ha cargado");
// })

// Temporizador o timers

// setInterval
// setTimeout

// var temporizador = setInterval(function(){
//     setColor();
// },1000);



// function setColor() {
//     var pagina = document.body;
//     pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "aqua" : "blue";                 
// };

// function stopChangeColor(){
//     clearInterval(temporizador);
// }


































