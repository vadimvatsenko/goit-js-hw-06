// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    carrentText: document.querySelector('#text')
};

refs.fontSizeControl.value = refs.fontSizeControl.min;

refs.fontSizeControl.addEventListener("input", onInputChange);

function onInputChange () {
  refs.carrentText.style.fontSize = this.value + 'px';
};




