import { Observable } from 'tns-core-modules/data/observable';
import { Salesforce } from 'nativescript-salesforce';

declare const KruxTracker: any;

export class HelloWorldModel extends Observable {
  public message: string;
  private salesforce: Salesforce;

  constructor() {
    super();

    this.salesforce = new Salesforce();
    this.message = this.salesforce.message;

    console.log("KruxTracker: " + KruxTracker);
    var kt = KruxTracker.sharedEventTrackerWithConfigIdDebugFlagDryRunFlag('abcdefghij', true, false);
  }
}
