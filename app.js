let numeroSecreto = 0;
let númeroIntentos = 0;
let listaNúmerosSorteados = [];
let numeroMax = 10;

//declarara función
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroUsuario = document.getElementById('valorUsuario').value;
    numeroUsuario = parseInt(numeroUsuario);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${númeroIntentos} ${(númeroIntentos === 1 ? 'vez' : 'veces')}.`);

        //Deshabilita o quita el elemento del botón en este caso el disabled
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //Si el usuario no acierta
        if (numeroSecreto > numeroUsuario) {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor.');
        }
        númeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //Capturar el valor del id
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    //En la función definimos los parámetros
    asignarTextoElemento('h1', 'Juego secreto!');
    asignarTextoElemento('p', `Elije un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    númeroIntentos = 1;
}


function nuevoJuego() {
    //Limpiamos la caja.
    limpiarCaja();
    //Indicamos el mensaje
    //Generamos el número aleatorio
    //Inicializar el número de intentos.
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//generamos una función que nos de un numero aleatorio
//dentro de la función usamos el Math floor para redondear y el random * 10 para darme valores entre 1 y 10
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1;

    console.log(`Número secreto: ${numeroGenerado}`);
    console.log(listaNúmerosSorteados);

    if (listaNúmerosSorteados.length == numeroMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
    } else {
        //Si el numero esta generado en la lista
        if (listaNúmerosSorteados.includes(numeroGenerado)) {
            //recursividad
            return generarNumeroSecreto();
        } else {
            listaNúmerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


condicionesIniciales();
