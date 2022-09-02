'use strict';

const btnCalc = document.querySelector('.calculate_button');

const btnRes = document.querySelector('.reset_button');

const resPlace = document.querySelector('.result');

const interprText = document.querySelector('.interpretation');

const interpr = ["wygłodzenie", "wychudzenie", "niedowaga", "waga prawidłowa", "nadwaga", "otyłość I-go stopnia", "otyłość II-go stopnia", "otyłość II-go stopnia"]

btnCalc.addEventListener('click', () => {
    
    const weight = document.querySelector('#weight').value;
    
    const height = document.querySelector('#height').value;
    
    const result = (Math.round(parseInt(weight) / Math.pow((parseInt(height) * .01), 2), (2)));
    
    resPlace.innerHTML = result;
    
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
        resPlace.innerHTML = '';

});

btnRes.addEventListener('click', ()=>{

    
    resPlace.innerHTML = '';
    
    interprText.innerHTML = '';
})


