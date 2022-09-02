'use strict';

const btn = document.querySelector('button');
const weight = document.querySelector('#weight').value;
const height = document.querySelector('#height').value;


const calc = () =>{
    const resPlace = document.querySelector('.result');
    const result = Math.round(weight/(Math.pow((height/100),2)));
    const interpr = ["wygłodzenie","wychudzenie", "niedowaga", "waga prawidłowa", "nadwaga", "otyłość I-go stopnia", "otyłość II-go stopnia", "otyłość II-go stopnia"];
    
    if (result<16){
        resPlace.innerHTML= interpr[0];
    }else if(result<17){
        resPlace.innerHTML = interpr[1];
    }else if(result<18.5){
        resPlace.innerHTML = interpr[2];
    }else if(result<24.5){
        resPlace.innerHTML = interpr[3];
    }else if(result<30){
        resPlace.innerHTML = interpr[4];
    }else if(result<35){
        resPlace.innerHTML = interpr[5];
    }else if(result<40){
        resPlace.innerHTM = interpr[6];
    }else 
        resPlace.innerHTML = '';


}
btn.addEventListener('click', calc);
