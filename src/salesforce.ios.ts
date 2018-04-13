import { CommonSalesForce } from './salesforce.common';

declare const KruxTracker;

export class SalesForce implements CommonSalesForce {

    private static instance: SalesForce = new SalesForce();
    private kruxTracker: KruxTracker;

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
        this.kruxTracker = KruxTracker.sharedEventTrackerWithConfigIdDebugFlagDryRunFlag(configId, debug, false);
    }

    public trackPageView(page: string, pageAttributes: any, userAttributes: any): void {
        this.kruxTracker.trackPageViewPageAttributesUserAttributes(page, pageAttributes, userAttributes);
    }

    public fireEvent(event: string, eventAttributes: any): void {
        this.kruxTracker.fireEventEventAttributesWithError(event, eventAttributes);
    }
}
