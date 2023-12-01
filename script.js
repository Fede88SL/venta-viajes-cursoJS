import {barcelona, roma, paris, londres} from './ciudades.js'

//Obtenemos los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//Agregamos un evento onclick a cada enlace recuperado con un "For each"
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){ 
        //remover estado ACTIVE en caso de que haya alguno seleccionado
        enlaces.forEach (function(enlace){          
            enlace.classList.remove('active')
        })
   

    //Agregar estado ACTIVE al elemento seleccionado
        this.classList.add('active')
    //Traer la informacion del objeto correspondiente segun la eleccion
        let contenido = obtenerContenido(this.textContent)
    //Mostrar el contenido en el DOM (html)
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    }) 
})

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,   //los strings vienen del html y tienen que estar escritos igual
        'Roma': roma,             //los strings vienen del html y tienen que estar escritos igual
        'París': paris,           //los strings vienen del html y tienen que estar escritos igual
        'Londres': londres        //los strings vienen del html y tienen que estar escritos igual
         };
    return contenido[enlace];
}