const consoleLog = document.querySelector ('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});


const ExampleAlert = document.querySelector ('#alert');

ExampleAlert.addEventListener('click', () => {
    alert('Служит для вывода информации во всплывающем окне');
});


const ExamplePrompt = document.querySelector ('#prompt');

ExamplePrompt.addEventListener('click', () => {
    alert('Служит для запроса ввода данных');
});