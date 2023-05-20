const counterValueEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

let count = 0;

decrementBtnEl.addEventListener('click', () => {
  count -= 1;
  counterValueEl.textContent = count;
});

incrementBtnEl.addEventListener('click', () => {
  count += 1;
  counterValueEl.textContent = count;
});