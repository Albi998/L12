var primo = 'Aldo';
let secondo = 'cliente';
const piGreco = 3.14;

document.getElementById('concatena').innerHTML = `${primo}, ${secondo}, ${piGreco}`;

var concatena2 = primo + ', ' + secondo + ', ' + piGreco;

document.getElementById('concatena2').innerHTML = concatena2;

var nome = 'Mario';

document.getElementById('var').innerHTML = nome;

{
    let nome = 'Carla';
    document.getElementById('let').innerHTML = nome;
}

document.getElementById('final').innerHTML = nome;

{
    let nome = 'Mario';
    document.getElementById('let2').innerHTML = nome;

    nome = 'Carla';
    document.getElementById('let3').innerHTML = nome;
    document.getElementById('final2').innerHTML = nome;
}




var numero = 15;
document.getElementById('iniziale').innerHTML += numero;

var addizione = numero + numero;

document.getElementById('valore1').innerHTML += `${addizione}, ${++addizione}`;

var sottrazione = numero - 10;

document.getElementById('valore2').innerHTML += `${sottrazione}, ${--sottrazione}`;

var moltiplicazione = numero * 3;

document.getElementById('valore3').innerHTML += moltiplicazione;

var divisione = numero / 3;

document.getElementById('valore4').innerHTML += divisione;

document.getElementById('valore5').innerHTML += `${numero}, è un numero`;