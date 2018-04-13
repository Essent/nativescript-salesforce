import { Observable } from 'tns-core-modules/data/observable';
import { SalesForce } from 'nativescript-salesforce';

declare const KruxTracker: any;

export class HelloWorldModel extends Observable {

  constructor() {
    super();

    SalesForce.getInstance().initialize('abcdedcdba', true);
  }
}
