// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createNewEl = ingredients.map(element => {
  console.log(element);
  const newEl = document.createElement('li');
  newEl.textContent = element;
  newEl.classList.add('item');

  return newEl;

});

const getElingredient = document.querySelector('#ingredients').append(...createNewEl);

//DONE


