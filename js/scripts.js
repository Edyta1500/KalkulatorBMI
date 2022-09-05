'use strict';


const btnCalc = document.querySelector('.calculate_button');

const btnReset = document.querySelector('.reset_button');

const resultPlace = document.querySelector('.result');

const interprText = document.querySelector('.interpretation');

const interpr = ["wygłodzenie", "wychudzenie", "niedowaga", "waga prawidłowa", "nadwaga", "otyłość I-go stopnia", "otyłość II-go stopnia", "otyłość III-go stopnia"]

const wtdBox = document.querySelectorAll('.wtd__box');
console.log(wtdBox);
console.log(wtdBox.length);
console.log(wtdBox[1].classList);

const wtdSevereThin = document.querySelector('.wtd--severe-thinness');
const wtdModerateThin = document.querySelector('.wtd--moderate-thinness');
const wtdMildThinness = document.querySelector('.wtd--moderate-thinness');


const calc = () => {
   
    const weight = document.querySelector('#weight');

    const height = document.querySelector('#height');

    const result = (Math.round(parseInt(weight.value) / Math.pow((parseInt(height.value) * .01), 2), (2)));

    resultPlace.innerHTML = result;

    
    for (let i=0; i<=wtdBox.length-1; i++){

                
   if (i == 0 && result < 16 && result >= 0) {
        interprText.innerHTML = interpr[i];
        wtdBox[i].classList.remove('disp-none');
    } else if (i == 1 && result >=16 && result < 17) {
        interprText.innerHTML = interpr[i];
        wtdBox[i].classList.remove('disp-none');
    } else if (i == 2 && result >=17 && result < 18.5) {
        interprText.innerHTML = interpr[i];
        wtdBox[i].classList.remove('disp-none');
    } else if (i == 3 && result >=18.5 && result < 24.5) {
        interprText.innerHTML = interpr[i];
        wtdBox[i].classList.remove('disp-none');
    } else if (i == 4 && result >=24.5 && result < 30) {
        interprText.innerHTML = interpr[i];
        wtdBox[i].classList.remove('disp-none');
    } else if (i == 5 && result >=30 && result < 35) {
        interprText.innerHTML = interpr[i];
        wtdBox[i].classList.remove('disp-none');
    } else if (i == 6 && result >=35 && result < 40) {
        interprText.innerHTML = interpr[i];
        wtdBox[i].classList.remove('disp-none');
    } else if (i == 7 && result >=40 ) {
        interprText.innerHTML = interpr[i];
        wtdBox[i].classList.remove('disp-none');
    }else {
        wtdBox[i].classList.add('disp-none');
    }

 }
}
     


btnCalc.addEventListener('click', calc)

btnReset.addEventListener('click', () => {


    resultPlace.innerHTML = '';

    interprText.innerHTML = '';

    weight.value = '';

    height.value = '';

    for (let i=0; i<=wtdBox.length-1; i++){
        wtdBox[i].classList.add('disp-none')
    }

    
})