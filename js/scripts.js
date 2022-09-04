'use strict';

const btnCalc = document.querySelector('.calculate_button');

const btnReset = document.querySelector('.reset_button');

const resultPlace = document.querySelector('.result');

const interprText = document.querySelector('.interpretation');

const interpr = ["wygłodzenie", "wychudzenie", "niedowaga", "waga prawidłowa", "nadwaga", "otyłość I-go stopnia", "otyłość II-go stopnia", "otyłość II-go stopnia"]

const calc = ()=>{

const weight = document.querySelector('#weight');

const height = document.querySelector('#height');

const result = (Math.round(parseInt(weight.value) / Math.pow((parseInt(height.value) * .01), 2), (2)));


resultPlace.innerHTML = result;
    
if (result < 16) {
    interprText.innerHTML = interpr[0];
} else if (result < 17) {
    interprText.innerHTML = interpr[1];
} else if (result < 18.5) {
    interprText.innerHTML = interpr[2];
} else if (result < 24.5) {
    interprText.innerHTML = interpr[3];
} else if (result < 30) {
    interprText.innerHTML = interpr[4];
} else if (result < 35) {
    interprText.innerHTML = interpr[5];
} else if (result < 40) {
    interprText.innerHTM = interpr[6];
} else
    resultPlace.innerHTML = '';

}

btnCalc.addEventListener('click', calc )

btnReset.addEventListener('click', ()=>{
   
    
    resultPlace.innerHTML = '';
    
    interprText.innerHTML = '';

    weight.value= '';

    height.value = '';
})


