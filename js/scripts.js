'use strict';


const btnCalc = document.querySelector('.calculate_button');

const btnReset = document.querySelector('.reset_button');

const resultPlace = document.querySelector('.result');

const interprText = document.querySelector('.interpretation');

const wtdBox = document.querySelectorAll('.wtd__box');

const weight = document.querySelector('#weight');

const height = document.querySelector('#height');



const interpr = ["wygłodzenie", "wychudzenie", "niedowaga", "waga prawidłowa", "nadwaga", "otyłość I-go stopnia", "otyłość II-go stopnia", "otyłość III-go stopnia", "człowieki tak nie rosną"]

const points = [0, 16, 17, 18, 24, 30, 35, 40, 200];


const calc = () => {

    if (weight.value > 0 && weight.value !== '' && height.value > 135 && height.value < 280 && height.value !== '') {

        const result = (Math.round(parseInt(weight.value) / Math.pow((parseInt(height.value) * .01), 2), (2)));

        resultPlace.innerHTML = result;
       
        for (let i = 0; i < points.length - 1; i++) {

            if (result >= points[i] && result < points[i + 1]) {

                interprText.innerHTML = interpr[i];

                wtdBox[i].classList.remove('disp-none');
              
                wtdBox[i].classList.add('disp-flex');
               
                weight.classList.remove('empty');
               
                height.classList.remove('empty');

            } else {

                wtdBox[i].classList.add('disp-none');
            }
        }

    } else if (weight.value == '' || weight.value <0 ) {
        
        weight.classList.add('empty');

    } else if (height.value == ''|| height.value <= 0) {
        
        height.classList.add('empty');
    
    } else if (height.value >= 280) {
       
        interprText.innerHTML = interpr[interpr.length - 1];
       
        resultPlace.innerHTML = '';

    } else if (height.value <= 135 && height.value > 0) {
        
        wtdBox[wtdBox.length - 1].classList.remove('disp-none');
       
        resultPlace.innerHTML = '';

    } else {
        
        weight.classList.add('empty');
       
        height.classList.add('empty');
    }

}


const reset = () => {

    resultPlace.innerHTML = '';

    interprText.innerHTML = '';

    weight.value = '';

    height.value = '';

    weight.classList.remove('empty');

    height.classList.remove('empty');

    for (let i = 0; i <= wtdBox.length - 1; i++) {

        wtdBox[i].classList.add('disp-none');
    }
}


const clearRes = () => {

    resultPlace.innerHTML = '';

    interprText.innerHTML = '';

    weight.classList.remove('empty');

    height.classList.remove('empty');

    for (let i = 0; i <= wtdBox.length - 1; i++) {

        wtdBox[i].classList.add('disp-none');
    }

};


btnCalc.addEventListener('click', calc);

btnReset.addEventListener('click', reset);

weight.addEventListener('input', clearRes);

height.addEventListener('input', clearRes);


