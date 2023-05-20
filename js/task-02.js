const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// здесь находим ul#ingredients.
const ingredientsEl = document.querySelector("#ingredients");
 
ingredients.forEach((ingredient) => {
// Создать отдельный элемент <li>. 
  const listItem = document.createElement("li");

// Добавить ему название ингредиента (его текстовое содержимое).
  listItem.textContent = ingredient;

// Добавить элементу класс item.
  listItem.classList.add("item");

// Вставить все <li> за одну операцию в конец родительского элемента (списка).
  ingredientsEl.appendChild(listItem);
});