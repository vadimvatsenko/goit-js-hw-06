// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >,
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
//
//Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
//

const refs = {
  boxEl: document.querySelector('#boxes'),
  createElBtn: document.querySelector('[data-create]'),
  destroyElBtn: document.querySelector('[data-destroy]'),
  inputNumberEl: document.querySelector('#controls input'),
}

refs.boxEl.style.display = 'flex';
refs.boxEl.style.flexWrap = 'wrap';
refs.boxEl.style.alignItems = 'center';
console.log(refs.inputNumberEl);

refs.createElBtn.addEventListener('click', () => {
  createBoxes(refs.inputNumberEl.value);

});
let allBoxEl = []
const createBoxes = amount => {
  

  for (let i = 0; i < amount; i += 1) {

    const divEl = document.createElement('div');

    divEl.style.width = allBoxEl.length * 10 + 30 + 'px';
    divEl.style.height = allBoxEl.length * 10 + 30 + 'px';

    divEl.style.backgroundColor = getRandomHexColor();

    allBoxEl.push(divEl);

    refs.boxEl.append(divEl);

    refs.destroyElBtn.addEventListener('click', () => {
      destroyBoxes(divEl);
      allBoxEl = [];
      
    });
  };
};

const destroyBoxes = element => {
  element.remove();

};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



