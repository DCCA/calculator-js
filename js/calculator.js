import Buttons from '../build/Buttons.min.js'

let displayValue = 0;
let firstValue = 0;
let secondValue = 0;
var arrOpe = [];
const displayCalcu = document.querySelector('.display-number');

start();
display(displayValue);

function click() {
    let clicked = this;
    console.log(clicked);
    if (clicked.className === 'numbers') {
        if(firstValue === 0){
            firstValue = '';
            console.log(clicked.className);
            firstValue = firstValue + clicked.innerText
            display(firstValue);
        } else{
            console.log(clicked.className);
            firstValue = firstValue + clicked.innerText
            display(firstValue);
        }
    }
    if (clicked.className === 'point') {
        // firstValue = firstValue.toString(10)
        if(firstValue === 0){
            firstValue = '';
            let check = firstValue.includes('.') 
            if (!check) {
                console.log(clicked.className);
                firstValue = firstValue + clicked.innerText
                display(firstValue);
            }
        } else {
            let check = firstValue.includes('.') 
            if (!check) {
                console.log(clicked.className);
                firstValue = firstValue + clicked.innerText
                display(firstValue);
            }
        }
    }
    if (clicked.className === 'operation') {
        let opeSign = clicked.innerText;
        if (opeSign !== '=') {
            arrOpe.push(firstValue);
            arrOpe.push(opeSign);
            firstValue = 0;
            console.log(arrOpe);
        } else {
            arrOpe.push(firstValue);
            firstValue = 0;
            let result = eval(arrOpe.join(' '));
            console.log(arrOpe);
            console.log(result);
            display(result);
            arrOpe = [];
        }
    }
    if (clicked.className === 'other') {
        let sign = clicked.innerText;
        if (sign === 'C') {
            firstValue = 0;
            arrOpe = [];
            display(firstValue);
        }
    }
}

// Create calculator
function display(num) {
    displayCalcu.innerText = num;
}
function start() {
    // Create number buttons
    for (let i = 0; i < 10; i++) {
        let numbers = 9 - i;
        let button = new Buttons('numbers', numbers);
        const buttonsSection = document.getElementsByClassName('numbers');
        button.create(buttonsSection);
    }
    let button = new Buttons('point', '.');
    const buttonsSection = document.getElementsByClassName('numbers');
    button.create(buttonsSection);
    // Generate operation buttons
    let operations = ['+', '-', '*', '/', '='];
    for (let i = 0; i < operations.length; i++) {
        let button = new Buttons('operation', operations[i]);
        const buttonsSection = document.getElementsByClassName('operators');
        button.create(buttonsSection);
    }
    // Generate other buttons. Add '+/-', '%'
    let otherBtn = ['C']; 
    for (let i = 0; i < otherBtn.length; i++) {
        let button = new Buttons('other', otherBtn[i]);
        const buttonsSection = document.getElementsByClassName('others');
        button.create(buttonsSection);
    }
    // Add event listeners
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', click);
    }
}