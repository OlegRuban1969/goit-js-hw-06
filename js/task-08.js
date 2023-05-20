
  // получаем ссылку на форму 
  const form = document.querySelector('.login-form');
  // добавляем обработчик события submit
  form.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const emailInput = form.elements.email; // Получаем поле ввода email
    const passwordInput = form.elements.password; // Получаем поле ввода пароля

    // Проверяем, заполнены ли все поля
    if (emailInput.value === '' || passwordInput.value === '') {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    // Создаем объект с введенными данными
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Выводим объект с данными в консоль
    console.log(formData);

    form.reset(); // Очищаем значения полей формы
  }


