// Счетчик состоит из спана и кнопок,
// которые, при клике, должны увеличивать
// и уменьшать его значение на единицу.
//
// - Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// - Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// - Обновляй интерфейс новым значением переменной counterValue.

const refs = {
    counterShell: document.querySelector('#counter'),
    decrBtn: document.querySelector('[data-action="decrement"]'),
    incrBtn: document.querySelector('[data-action="increment"]'),
    valueNumber: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.valueNumber.textContent = counterValue;
});

refs.incrBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.valueNumber.textContent = counterValue;
});

//DONE













