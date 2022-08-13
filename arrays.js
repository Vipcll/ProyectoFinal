let contadorIntentos = 0;
let resultado;
let tarjeta;


let numero = [1,0,0,0,0,0,0,0,0];
numero = numero.sort(()=>{return Math.random()-0.5});


function tarjetas(id){
    contadorIntentos++;

    tarjeta = document.getElementById(id);
    resultado = numero[id];
    if(resultado == 1)
    {
        tarjeta.innerHTML = "<img src= carta.jpg>";
    }
    
}





































/*var numeroSecreto; 
var contadorIntentos = 0;
var max = 11;
var min = 1;
var numeroIngresado;

const generar = document.getElementById("MiBoton1");
const jugar = document.getElementById("MiBoton2");

generar.addEventListener('click', () =>{
    numeroSecreto = Math.floor(Math.random() * (max - min))+ min;
    console.log(numeroSecreto);
    contadorIntentos = 0;
    document.getElementById("intentos").value = contadorIntentos;
    document.getElementById("resultado").innerHTML =" ";
})

jugar.addEventListener('click', () => 
{
    numeroIngresado = document.getElementById("numero").value;
    contadorIntentos = contadorIntentos + 1;
    document.getElementById("intentos").value = contadorIntentos;
    if(numeroSecreto == numeroIngresado){
        document.getElementById("resultado").innerHTML = "Usted es un ganador en solo "+ contadorIntentos + " intentos."
    }else if(numeroIngresado < numeroSecreto){
        document.getElementById("resultado").innerHTML ="Falta...";
    }    else {
        document.getElementById("resultado").innerHTML ="Se paso...";
    }
})*/