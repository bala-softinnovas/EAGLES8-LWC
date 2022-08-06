import { LightningElement } from 'lwc';

import OPP_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';

export default class LightningRecordViewFormOpp extends LightningElement {
    recordId = "0065i000007uPrgAAE";
    objectName = OPP_OBJECT;
    fields = {
        account: ACCOUNT_FIELD,
        name: NAME_FIELD,
        amount: AMOUNT_FIELD,
        stage: STAGE_FIELD,
        type: TYPE_FIELD,
        closeDate: CLOSEDATE_FIELD
    };
}