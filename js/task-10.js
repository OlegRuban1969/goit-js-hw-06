function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Ссылка на поле ввода по тегу
const inputEl = document.querySelector('input'); 
// Ссылка на кнопку "Create" по атрибуту 
const createBtnEl = document.querySelector('[data-create]'); 
// Ссылка на кнопку "Destroy" по атрибуту 
const destroyBtnEl = document.querySelector('[data-destroy]'); 
// Ссылка на контейнер по id для создания коллекции элементов
const boxesContainerEl = document.querySelector('#boxes'); 

createBtnEl.addEventListener('click', createBoxes); 
// Обработчик события на кнопку "Create", вызывает функцию createBoxes
destroyBtnEl.addEventListener('click', destroyBoxes); 
// Обработчик события на кнопку "Destroy", вызывает функцию destroyBoxes

function createBoxes() {
  const amount = Number(inputEl.value); // значение (строка) inputEl.value - в числовой тип данных

  // Используем Array.from() для создания массива размеров элементов
  const sizes = Array.from({ length: amount }, (_, index) => 30 + index * 10);
  console.log(sizes);
  // Используем map() для преобразования массива размеров в массив HTML-разметки элементов
  const boxesHTML = sizes
    .map((size) => {
      const color = getRandomHexColor();
      return `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
    })
    .join('');
   
  boxesContainerEl.innerHTML = boxesHTML;
  console.log(boxesContainerEl);
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
}



