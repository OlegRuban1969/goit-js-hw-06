const inputEl = document.querySelector("#validation-input");

//  Функция вызывается, когда инпут теряет фокус (пользователь перестает вводить символы).
  inputEl.addEventListener("blur", function() {
    const inputLength = inputEl.value.length; //находим длину значения, введенного в инпут
    console.log(inputLength); //в консоль
// получаем длину значения, указанную в атрибуте data-length
    const expectedLength = Number(inputEl.getAttribute("data-length"));

    if (inputLength === expectedLength) {
        // добавляется класс valid и удаляется класс invalid у элемента 
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        // добавляется класс invalid и удаляется класс valid у элемента 
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
  });