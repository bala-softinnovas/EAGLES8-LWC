import { LightningElement, wire } from 'lwc';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department';
import ACCOUNT_NAME from '@salesforce/schema/Contact.Account.Name';

const FIELDS = [
    FIRSTNAME_FIELD,
    LASTNAME_FIELD,
    EMAIL_FIELD,
    PHONE_FIELD,
    DEPARTMENT_FIELD,
    ACCOUNT_NAME
];

export default class GetRecordContact extends LightningElement {
    //Approach 1//
    /*
    recordId = "0035i00000BHolLAAT";
    accountName;
    firstname;
    lastname;
    email;
    phone;
    department;

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    contactHandler({data, error}) {
        if(data) {
            console.log(data);
            this.accountName = data.fields.Account.displayValue;
            this.firstname = data.fields.FirstName.value;
            this.lastname = data.fields.LastName.value;
            this.email = data.fields.Email.value;
            this.phone = data.fields.Phone.value;
            this.department = data.fields.Department.value;
        }
        if(error) {
            console.error(error);
        }
    }
    */

    //Approach 2//
    /*
    recordId = "0035i00000BHolLAAT";
    accountName;
    firstname;
    lastname;
    email;
    phone;
    department;

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    contactHandler({data, error}) {
        if(data) {
            console.log(data);
            this.accountName = getFieldValue(data, ACCOUNT_NAME);
            this.firstname = getFieldValue(data, FIRSTNAME_FIELD);
            this.lastname = getFieldValue(data, LASTNAME_FIELD);
            this.email = getFieldValue(data, EMAIL_FIELD);
            this.phone = getFieldValue(data, PHONE_FIELD)
            this.department = getFieldValue(data, DEPARTMENT_FIELD);
        }
        if(error) {
            console.error(error);
        }
    }
    */
    
    //Approach 3//
    recordId = "0035i00000BHolLAAT";

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    contact;

    get accountName() {
        return getFieldValue(this.contact.data, ACCOUNT_NAME);
    }

    get firstname() {
        return getFieldValue(this.contact.data, FIRSTNAME_FIELD);
    }

    get lastname() {
        return getFieldValue(this.contact.data, LASTNAME_FIELD);
    }

    get email() {
        return getFieldValue(this.contact.data, EMAIL_FIELD);
    }

    get phone() {
        return getFieldValue(this.contact.data, PHONE_FIELD);
    }

    get department() {
        return getFieldValue(this.contact.data, DEPARTMENT_FIELD);
    }
}