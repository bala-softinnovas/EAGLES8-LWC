import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
    fruits = ["Orange", "Banana", "Apple", "Pineapple"];
    num1 = 10;
    num2 = 20;

    get fistFruit() {
        return this.fruits[0];
    }

    get sumOfNums() {
        return this.num1 + this.num2;
    }
}