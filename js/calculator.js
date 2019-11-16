import Buttons from '../build/Buttons.min.js'

start();

function start(){
    for(let i = 0; i < 10; i++){
        let button = new Buttons('numbers', i);
        const buttonsSection = document.getElementsByClassName('buttons');
        button.create(buttonsSection);
    }
}