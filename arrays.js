var numeroSecreto;
var contadorIntentos = 0;
var max = 11;
var min = 1;
var numeroIngresado;
var numero;
var salir;

alert("hola intente adivinar el numero entre 1 y 10")
numeroSecreto = getRandomNum(min, max);
console.log(numeroSecreto);
parseInt(numeroSecreto);
verificar();




function verificar() {
do {

    numeroIngresado = comenzar();
    contadorIntentos = contadorIntentos + 1;
    console.log(numeroSecreto);

    
        
        if (numeroSecreto == numeroIngresado) {
            alert("Usted es un ganador en solo " + contadorIntentos + " intentos.");
            salir = 1;
        } else if (numeroIngresado < numeroSecreto) {
            alert("Falta...");
            salir = 0;
        } else {
            salir = 0;
            alert("Se paso...");
        }
    } while (salir == 0);

}

function comenzar() {
    numero = prompt("ingrese un numero");
    return numero;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min))+ min;
}