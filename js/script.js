"use strict";

// ARRAY VUOTO
let arrayRandom = [];

let num_random = document.getElementById('numbers');

// VARIABILE TIMER 30s
let timer = 3

//FUNZIONE PER NUMERI CASUALI
function create_num(min, max){
    for(let i=0; i<5; i++){
        arrayRandom[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arrayRandom;
}

//STABILISCO MIN/MAX DELLA FUNZIONE
create_num(1, 100)

// MOSTRO I NUMERI CASUALI ALL'UTENTE
num_random.innerText = arrayRandom;

// TIMER 30S
setTimeout(function(){
    num_random.innerText = '';

}, timer * 1000);

let arrayUser = [];
let arRight= [];
let arWrong= [];
let total = 0;

// FUNZIONE PER FAR APPARIRE I PROMPT DOPO 30s
setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        let num_utente = parseInt(prompt(`Inserisci il ${i + 1}° numero`));
        arrayUser.push(num_utente);
    }

    // VERIFICO I NUMERI CORRETTI
    for (let i = 0; i < arrayRandom.length; i++) {
        let numbers = arrayRandom[i];

        if (arrayUser.includes(numbers)) {
            arRight.push(arrayUser[i]);
            total++;
        } else {
            arWrong.push(arrayUser[i]);
        }
    }

    // MOSTRO IL RISULTATO
    alert(`
        Numeri indovinati: ${total}
        Numeri corretti: ${arRight}
        Numeri sbagliati: ${arWrong}
    `);

}, (timer + 1) * 1000);
