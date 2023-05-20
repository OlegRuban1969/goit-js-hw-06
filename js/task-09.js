function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color'); // ссылка на элемент <button>
const clrSpanEl = document.querySelector('.color'); // ссылка на элемент <span>
const bodyEl = document.body; // ссылка на элемент <body>

btnEl.addEventListener('click', function () {   // Добавляем обработчик события 'click' к кнопке
    const colorNew = getRandomHexColor();      // Генерируем случайный цвет, используя функцию 
    bodyEl.style.backgroundColor = colorNew;   // Устанавливаем цвет фона элемента <body> = сгенерированному цвету
    clrSpanEl.textContent = colorNew;  // Текст внутри элемента span = сгенерированному цвету
  });