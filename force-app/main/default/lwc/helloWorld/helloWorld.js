import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name; //undefined
    fullname = "Salesforce Developer"; //string type
    age = 30; //number type
    location = {
        city: "Houston",
        country: "United States",
        postalCode: "50003"
    }; //object type
    fruits = ["Orange", "Banana", "Apple", "Grape"]; //array type

    num1 = 10;
    num2 = 20;
    num3 = this.num1 + this.num2;

    sum(num1, num2) {
        this.fullname = "";
        return num1+num2;
    }

    /*
    input => Balakrishna
    output => BALAKRISHNA
    */
    convertToUpperCase(fullname) {
        return fullname.toUpperCase();
        //fullname.toLowerCase();
    }
}