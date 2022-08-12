import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_NUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

const FIELDS = [
    NAME_FIELD, 
    ACCOUNT_NUMBER_FIELD, 
    TYPE_FIELD, 
    INDUSTRY_FIELD, 
    REVENUE_FIELD, 
    PHONE_FIELD
];

export default class GetRecordAccount extends LightningElement {
    //Name, Account Number, Type, Industry, Annual Revenue, Phone
    recordId = "0015i00000ME4GSAA1";
    name;
    accountNumber;
    type;
    industry;
    revenue;
    phone;

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    accountRecordHandler({data, error}) {
        if(data) {
            console.log(data);
            this.name = data.fields.Name.value;
            this.accountNumber = data.fields.AccountNumber.value;
            this.type = data.fields.Type.value;
            this.industry = data.fields.Industry.value;
            this.revenue = data.fields.AnnualRevenue.displayValue;
            this.phone = data.fields.Phone.value;
        }
        if(error) {
            console.error(error);
        }
    }
}