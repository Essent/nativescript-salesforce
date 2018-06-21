import { CommonSalesforceDMP } from './salesforce.common';

declare const KruxTracker;

export class SalesforceDMP implements CommonSalesforceDMP {

    private static instance: SalesforceDMP = new SalesforceDMP();
    private kruxTracker: any;

    constructor() {
        if (SalesforceDMP.instance) {
            throw new Error("Error: Instance already created: Use Salesforce.getInstance() instead of new.");
        }
        SalesforceDMP.instance = this;
    }

    static getInstance() {
        return SalesforceDMP.instance;
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

    public setConsent(): void {

    }

    public getConsent(): void {

    }
}
