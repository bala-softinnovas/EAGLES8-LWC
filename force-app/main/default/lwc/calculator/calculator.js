import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    input1;
    input2;
    sum = 0;

    changeHandler(event) {
        if(event.target.name === "input1") {
            this.input1 = event.target.value;
        } else {
            this.input2 = event.target.value;
        }
        if(this.input1 == undefined) {
            this.input1 = 0;
        }
        if(this.input2 == undefined) {
            this.input2 = 0;
        }
        this.sum = Number(this.input1) + Number(this.input2);
    }
}