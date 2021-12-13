const   trafficLightRed = document.querySelector('#trafficLightRed'),
        trafficLightYellow = document.querySelector('#trafficLightYellow'),
        trafficLightGreen = document.querySelector('#trafficLightGreen'),
        trafficLight = document.querySelector('.trafficLight');

function makeGreen() {
    trafficLightGreen.style.background = ('green');
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightGreen.style.background = ('black');
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('yellow');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightGreen.style.background = ('black');
    trafficLightRed.style.background = ('red');
    trafficLightYellow.style.background = ('black');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
}

trafficLight.addEventListener('click', makeGreen);