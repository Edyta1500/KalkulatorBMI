'use strict';

//Zmienne
const btnCalc = document.querySelector('.calculate_button');

const btnReset = document.querySelector('.reset_button');

const resultPlace = document.querySelector('.result');

const interprText = document.querySelector('.interpretation');

const wtdBox = document.querySelectorAll('.wtd__box');

const weight = document.querySelector('#weight');

const height = document.querySelector('#height');

//tablice

const interpr = ["wygłodzenie", "wychudzenie", "niedowaga", "waga prawidłowa", "nadwaga", "otyłość I-go stopnia", "otyłość II-go stopnia", "otyłość III-go stopnia"]

const points = [0, 16, 17, 18.5, 24.5, 30, 35, 40, 200];

//funkcje

const calc = () => {

    const result = (Math.round(parseInt(weight.value) / Math.pow((parseInt(height.value) * .01), 2), (2)));

    resultPlace.innerHTML = result;

    for (let i = 0; i < points.length - 1; i++) {
        
        if (result >= points[i] && result < points[i + 1]) {
           
            interprText.innerHTML = interpr[i];
            
            wtdBox[i].classList.remove('disp-none');

        } else {

            wtdBox[i].classList.add('disp-none');
        }
    }

}

const reset = () => {

    resultPlace.innerHTML = '';

    interprText.innerHTML = '';

    weight.value = '';

    height.value = '';

    for (let i = 0; i <= wtdBox.length - 1; i++) {
       
        wtdBox[i].classList.add('disp-none');
    }
}


const clear = () => {
   
    resultPlace.innerHTML = '';
   
    interprText.innerHTML = '';
   
    for (let i = 0; i <= wtdBox.length - 1; i++) {
       
        wtdBox[i].classList.add('disp-none');
    }

};
//nasłuchiwacze zdarzeń

btnCalc.addEventListener('click', calc);

btnReset.addEventListener('click', reset);

weight.addEventListener('input', clear);

height.addEventListener('input', clear);


