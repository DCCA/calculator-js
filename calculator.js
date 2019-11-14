import Buttons from './parcials/Buttons'

start();

function start(){
    for(i = 0; i < 10; i++){
        const button = new Buttons('numbers', i);
        const buttonsSection = document.getElementsByClassName('buttons');
        const node = document.createElement('button');
        buttonsSection.appendChild(button);
    }
};