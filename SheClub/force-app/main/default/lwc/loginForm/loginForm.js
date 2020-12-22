import { LightningElement, api } from 'lwc';
import sheclubLabel from '@salesforce/label/c.sheclubLabel';
import sheclubResources from '@salesforce/resourceUrl/sheclubResources';

export default class LoginForm extends LightningElement {

    @api label = {
        sheclubLabel,
        sheclubResources, 
    }
} 