export default class Button {
    constructor(classBtn, value) {
        this.classBtn = classBtn;
        this.value = value;
    }
    create(buttonSection){
        let buttonSec = buttonSection;
        let newButton = document.createElement("button");
        newButton.innerText = this.value;
        newButton.setAttribute("class", this.classBtn);
        buttonSec[0].appendChild(newButton);
    }
  }