const link = document.querySelector('a');

link.onclick = function (evt) {
       evt.preventDefault();
};
link.addEventListener('click', () => {
    link.textContent = prompt('Введите текст');
})
