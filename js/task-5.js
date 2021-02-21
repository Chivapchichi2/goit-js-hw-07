'use strict';

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.

// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("#name-input");
const spanNamRef = document.querySelector('#name-output');

const greetByName = (e) => {
  if (e.target.value.length !== 0) {
    spanNamRef.textContent = e.target.value;
    return;
     }
  
 spanNamRef.textContent = 'незнакомец';

}

inputRef.addEventListener('input', greetByName);