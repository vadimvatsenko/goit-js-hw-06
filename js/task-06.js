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
console.log(getInput.dataset.length);

getInput.addEventListener('blur', inputChangeValidColor);

function inputChangeValidColor(event) {
    if (event.currentTarget.value.length < getInput.dataset.length) {
        return getInput.classList.add('invalid') || getInput.classList.remove('valid');
        
    };
   return getInput.classList.add('valid') || getInput.classList.remove('invalid');
};

//DONE

