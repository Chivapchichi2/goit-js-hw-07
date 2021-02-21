'use strict';

// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.

// В результате при перетаскивании ползунка будет меняться размер текста.

// "font-size-control" 

const controlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector('#text');

textRef.style.fontSize = `${controlRef.value}px`;

controlRef.addEventListener('input', (e) => textRef.style.fontSize =`${e.target.value}px`);