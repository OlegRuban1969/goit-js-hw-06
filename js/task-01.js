const categoriesEl = document.querySelector("#categories");
//находим элемент с id "categories" и сохраняем его в переменной categoriesEl

const items = categoriesEl.querySelectorAll(".item");
// поиск всех элементов с классом "item" внутри categoriesEl 

console.log(`Number of categories: ${items.length}`);
// выводим количество категорий, используя свойство length массива items.

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  // находим заголовок элемента и его текстовое содержимое

  const categoryItems = item.querySelectorAll("li");
  // находим все элементы li внутри текущей категории
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems.length}`);
});