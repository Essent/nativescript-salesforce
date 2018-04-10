import { Observable } from 'tns-core-modules/data/observable';
import { Salesforce } from 'nativescript-salesforce';

export class HelloWorldModel extends Observable {
  public message: string;
  private salesforce: Salesforce;

  constructor() {
    super();

    this.salesforce = new Salesforce();
    this.message = this.salesforce.message;
  }
}
