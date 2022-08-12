import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

export default class GetRecordCase extends LightningElement {
    recordId = "5005i00000Cl9LgAAJ";
    caseNumber;
    priority;
    status;
    subject;

    @wire(getRecord, {recordId: '$recordId', layoutTypes: ['Compact'], modes: ['View']})
    caseHandler({data, error}) {
        if(data) {
            console.log(data);
            this.caseNumber = data.fields.CaseNumber.value;
            this.priority = data.fields.Priority.value;
            this.status = data.fields.Status.value;
            this.subject = data.fields.Subject.value;
        }
        if(error) {
            console.error(error);
        }
    }
}