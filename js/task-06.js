// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
//
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.


const getInput = document.querySelector('input');


getInput.addEventListener('blur', inputChangeValidColor);

function inputChangeValidColor(event) {
    console.log(event.currentTarget.value.length == getInput.dataset.length);
    console.log(getInput.dataset.length);
    console.log(event.currentTarget.value.length)

    if (event.currentTarget.value.length == getInput.dataset.length) {
       return getInput.classList.add('valid') || getInput.classList.remove('invalid');
    }
    return getInput.classList.add('invalid') || getInput.classList.remove('valid');
};



 




        


