'use strict';

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.

// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

const listItemArray = ingredients.map(
  item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  }
);
list.append(...listItemArray);





