import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import DESC_FIELD from '@salesforce/schema/Case.Description';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';

export default class CaseForm extends LightningElement {
    recordId = "5005i00000Cl9LgAAJ";
    objectName = CASE_OBJECT;
    fields = [SUBJECT_FIELD, PRIORITY_FIELD, STATUS_FIELD, DESC_FIELD, ORIGIN_FIELD];

    successHandler() {
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "Record has been saved successfully!",
            variant: "success"
        });
        this.dispatchEvent(successToast);
    }
}