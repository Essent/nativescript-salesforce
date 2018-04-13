import { CommonSalesForce } from './salesforce.common';

declare const KruxTracker: any;

export class SalesForce implements CommonSalesForce {

    private static instance: SalesForce = new SalesForce();

    constructor() {
        if (SalesForce.instance) {
            throw new Error("Error: Instance already created: Use Salesforce.getInstance() instead of new.");
        }
        SalesForce.instance = this;
    }

    static getInstance() {
        return SalesForce.instance;
    }

    public initialize(configId: string, debug: boolean): void {
        var kt = KruxTracker.sharedEventTrackerWithConfigIdDebugFlagDryRunFlag(configId, debug, false);
    }
}
