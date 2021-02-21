'use strict';

// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.

// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона

// Размеры самого первого div - 30px на 30px

// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('#controls input');


let boxesRef = document.querySelector('#boxes');

const clone = boxesRef.cloneNode(true);

const renderButtonRef = document.querySelector('#controls button[data-action="render"]');

const destroyButtonRef = document.querySelector('#controls button[data-action="destroy"]');

const getRandomNumber = () =>  Math.round(Math.random() * 255);

const createBoxes = (amount) => {
  if (inputRef.classList.contains('valid')) {
    let markup = '';
    let divSize = 30;
    for (let i = 0; i < amount; i++) {
      markup += `<div style="width:${divSize}px; height:${divSize}px; margin:5px; background-color:rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()});"></div>`
      divSize += 10;
    }
    document.querySelector('#boxes').insertAdjacentHTML('afterbegin', markup);
    inputRef.value = '';
    return;
  }
  inputRef.value = '';
}

const destroyBoxes = () => {
  boxesRef.remove();
  boxesRef = clone.cloneNode(true);
  document.querySelector('#controls').insertAdjacentElement('afterend', boxesRef);
  inputRef.value = '';
  removeClasses();
  }

const checkValidationInput = () => {
 
  if (rez > 0 && rez <= 100) {
    inputRef.classList.add('valid');
    return ;
  }
     
    inputRef.classList.add('invalid');
}

const removeClasses = () => inputRef.classList.remove('valid', 'invalid'); 
let rez = 0;

inputRef.addEventListener('input', (e) => rez = e.target.value);
inputRef.addEventListener('focus', removeClasses);
inputRef.addEventListener('blur', checkValidationInput);
renderButtonRef.addEventListener('click', () => createBoxes(rez) );
destroyButtonRef.addEventListener('click', destroyBoxes);