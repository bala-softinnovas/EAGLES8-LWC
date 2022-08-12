import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import OPP_OBJECT from '@salesforce/schema/Opportunity';

export default class GetPicklistValuesByRecordTypeOpp extends LightningElement {
    oppRtId;
    stageOptions = [];
    typeOptions = [];
    selectedStage;
    selectedType;

    @wire(getObjectInfo, {objectApiName: OPP_OBJECT})
    oppInfoHandler({data, error}) {
        if(data) {
            this.oppRtId = data.defaultRecordTypeId;
        }
    }

    @wire(getPicklistValuesByRecordType, {objectApiName: OPP_OBJECT, recordTypeId: '$oppRtId'})
    picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.stageOptions = data.picklistFieldValues.StageName.values;
            this.typeOptions = data.picklistFieldValues.Type.values;
        }
    }

    changeHandler(event) {
        if(event.target.name === "Stage") {
            this.selectedStage = event.target.value;
        } else {
            this.selectedType = event.target.value;
        }
    }
}