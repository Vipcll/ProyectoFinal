let contadorIntentos = 0;
let resultado;
let tarjeta;
let darkMode
let vidas = 2;
let win = false;

let numero = [1,0,0,0,0,0,0,0,0];
numero = numero.sort(()=>{return Math.random()-0.5});
console.log(numero);

const botonDark = document.getElementById('botonDarkMode');
const botonLight = document.getElementById('botonLightMode');

function tarjetas(id){
    tarjeta = document.getElementById(id);
    resultado = numero[id];
    console.log(id)
    console.log(resultado);

    if(vidas >= 0 && win == false)
    {
        contadorIntentos++;
        if(resultado != 0)
        {

            tarjeta.innerHTML = "<img src= carta.jpg>";
            document.getElementById("resultado").innerHTML = "Usted es un ganador en solo "+ contadorIntentos + "intentos."
            win = true;
        }else
        {
            tarjeta.innerHTML = "NO"
            document.getElementById("vidas").innerHTML = "Tus vidas son "+ vidas;
            vidas--;
        }
    }else if(win == true)
    {
        document.getElementById("resultado").innerHTML = "Ya has ganado, refresca la pagina para volver a jugar"
    }
    else
    {
        document.getElementById("resultado").innerHTML = "Has perdido, refresca la pagina para volver a jugar"
    }
}

if(localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode');
} else {
    localStorage.setItem('darkMode', "light") ;
}
if(darkMode == "dark") {
    document.body.classList.add("darkMode");
}
botonDark.addEventListener('click', () => {
    document.body.classList.add("darkMode");
    localStorage.setItem('darkMode', "dark");
})
botonLight.addEventListener('click', () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem('darkMode', "light");
})