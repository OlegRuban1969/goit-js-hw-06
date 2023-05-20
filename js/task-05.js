const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

// вешаем слушателя события на input
nameInputEl.addEventListener("input", function() {
    const name = nameInputEl.value.trim(); //  получаем текущее значение инпута без лишних пробелов

    //  проверяем, является ли name пустой строкой или содержит текст
    if (name === "") {
      nameOutputEl.textContent = "Anonymous";
    } else {
      nameOutputEl.textContent = name;
    }
  });
