
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output')
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.name.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {
        refs.name.textContent = 'Anonymous';
    }
}
//DONE
