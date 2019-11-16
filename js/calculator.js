import Buttons from '../build/Buttons.min.js'

let displayNum = 0;
let prevValue = 0;
let nextValue = 0;
const displayCalcu = document.querySelector('.display-number');

start();
display(displayNum);

function click(){
    if(this.className === 'numbers'){
        let num = this.innerText
        prevValue = prevValue + num;
        prevValue = parseInt(prevValue, 10);
        display(prevValue);
    }
    // If operators
    if(this.className === 'operation'){
        let runApp = {
            sum: function(nextValue, prevValue) { return prevValue + nextValue },
            sub: function(nextValue, prevValue) { return prevValue - nextValue },
            mul: function(nextValue, prevValue) { return prevValue * nextValue },
            div: function(nextValue, prevValue) { return prevValue / nextValue },
            eq: function(nextValue) { return nextValue }
        };
        // Store operator
        let ope = this.innerText;
        // Execute the operation
        if(ope === '+'){
            let result = runApp.sum(nextValue, prevValue);
            display(result);
            console.log('re ' + result);
            console.log('pv ' + prevValue);
            console.log('nv ' + nextValue);
            nextValue = result;
            prevValue = '';
        }
        if(ope === '='){
            let result = runApp.eq(nextValue);
            display(result);
            console.log('re ' + result);
            console.log('pv ' + prevValue);
            console.log('nv ' + nextValue);
            nextValue = result;
            prevValue = '';
        }
        // Set prevNumber to 0
        // prevValue = 0;
    }
    // If point
    // If others
}

function display(num){
    displayCalcu.innerText = num;
}

function start(){
    // Create number buttons
    for(let i = 0; i < 10; i++){
        let numbers = 9 - i;
        let button = new Buttons('numbers', numbers);
        const buttonsSection = document.getElementsByClassName('numbers');
        button.create(buttonsSection);
    }
    let button = new Buttons('point', '.');
    const buttonsSection = document.getElementsByClassName('numbers');
    button.create(buttonsSection);
    // Generate operation buttons
    let operations = ['+', '-', '*' , '/', '='];
    for(let i = 0; i < operations.length; i++){
        let button = new Buttons('operation', operations[i]);
        const buttonsSection = document.getElementsByClassName('operators');
        button.create(buttonsSection);
    }
    // Generate other buttons
    let otherBtn = ['C', '+/-', '%'];
    for(let i = 0; i < otherBtn.length; i++){
        let button = new Buttons('operation', otherBtn[i]);
        const buttonsSection = document.getElementsByClassName('others');
        button.create(buttonsSection);
    }
    // Add event listeners
    const buttons = document.querySelectorAll('button');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', click);
    }
}