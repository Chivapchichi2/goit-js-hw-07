'use strict';

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.

// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');

const checkValidationInput = (e) => {
  if (e.target.value.length === 0) {
    return removeClasses()
  }
  e.target.value.length === +inputRef.dataset.length ?
    inputRef.classList.add('valid') :
    inputRef.classList.add('invalid');
}

const removeClasses = () => inputRef.classList.remove('valid', 'invalid')  

inputRef.addEventListener('focus', removeClasses);
inputRef.addEventListener('blur', checkValidationInput);