'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.

// Создай функции increment и decrement для увеличения и уменьшения значения счетчика

// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;


const spanValueRef = document.querySelector('#value');

const showCurrentValue = () => spanValueRef.textContent = counterValue;

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

incrementBtn.addEventListener('click', increment);
incrementBtn.addEventListener('click', showCurrentValue);
decrementBtn.addEventListener('click', decrement);
decrementBtn.addEventListener('click', showCurrentValue);