import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import LEAD_OBJECT from '@salesforce/schema/Lead';

export default class GetPicklistValuesByRecordTypeLead extends LightningElement {

    leadRtId;
    industryOptions = [];
    leadSourceOptions = [];
    selectedIndustry;
    selectedLeadSource;

    @wire(getObjectInfo, {objectApiName: LEAD_OBJECT})
    leadInfoHandler({data, error}) {
        if(data) {
            this.leadRtId = data.defaultRecordTypeId;
        }
    }

    @wire(getPicklistValuesByRecordType, {objectApiName: LEAD_OBJECT, recordTypeId: '$leadRtId'})
    picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.industryOptions = data.picklistFieldValues.Industry.values;
            this.leadSourceOptions = data.picklistFieldValues.LeadSource.values;
        }
    }

    changeHandler(event) {
        if(event.target.name === "Lead Source") {
            this.selectedLeadSource = event.target.value;
        } else {
            this.selectedIndustry = event.target.value;
        }
    }
}