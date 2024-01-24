let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numerDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto === numerDeUsuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numerDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        LimpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log('numero secreto: ' + numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    LimpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aletorio
    //Inicilizar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

function LimpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log('numeroGenerado: ' + numeroGenerado);
    console.log('listaNumeroGenerado: ' + numeroGenerado);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}



/*1. Crea una lista vacía llamada "listaGenerica".*/
/* let listaGenerica = []; */
/*2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
/* let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']; */
/*3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/
/* lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang'); */
/* lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang'); */
/*4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/
/* for (var i =0; i < lenguagesDeProgramacion.length; i++){
    console.log(lenguagesDeProgramacion[i]);
} */
/* lenguagesDeProgramacion.forEach(element => {
    console.log(element);
}); */
/*5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.*/
/* lenguagesDeProgramacion.reverse().forEach(elemento => {
    console.log(elemento);
}); */
/*6. Crea una función que calcule el promedio de los elementos en una lista de números.*/
/* let numeros = [5,7,3,-1,8,4,6,9,2,11]; */
/*7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/
/* function maxMin() {
    console.log("Minimo: " + Math.min(...numeros));
    console.log("Maximo: " + Math.max(...numeros));
}
maxMin();
 */
/*8. Crea una función que devuelva la suma de todos los elementos en una lista.*/
/* function suma() {
    let valorInicial =0;
    let total = numeros.reduce((acumulador, valorActual)=>acumulador + valorActual,valorInicial);
    console.log("Suma total: " + total);
}
suma(); */

/*9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.*/

/*10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.*/

/*11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/




/*
1.- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/
/* function masaCorporal(altura, peso) {
    return peso/altura;
}
console.log(`IMC = ${masaCorporal(1.70,75)}`); */

/*
  2 Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/
//  n! = n*(n-1)!

/* function factorial(numero) {
    if(numero == 0 || numero == 1){
        return 1;
    }else{
        return numero * factorial(numero-1);
    }
}

console.log("Factorial: "+factorial(5)); */


/*  3 Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
  4 Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
  5 Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
  6 Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */


/* 1 Crear una función que muestre "¡Hola, mundo!" en la consola.
2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */

/* Desafíos
1 Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
2 mCambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
3 Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
4 Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
5 Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
6 Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.1 */