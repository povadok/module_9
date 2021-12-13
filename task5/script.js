const textInput = document.querySelector('input'),
    textDuplicate = document.querySelector('#duplicateField'),
    buttonClick = document.querySelector('button');


function textAdd() {
    textDuplicate.textContent = textInput.value;
}

textInput.addEventListener ('keyup', textAdd);

buttonClick.onclick = function (evt) {
    evt.preventDefault();
};

buttonClick.addEventListener('click', () => {
    console.log(textDuplicate.textContent);
    textDuplicate.textContent = "";
    textInput.value = '';
})