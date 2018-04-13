import { CommonSalesForce } from './salesforce.common';
import * as application from 'tns-core-modules/application';

declare const com: any;

export class SalesForce implements CommonSalesForce {

    private static instance: SalesForce = new SalesForce();
    private kruxEventAggregator: any = com.krux.androidsdk.aggregator.KruxEventAggregator;

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
        let kruxSegmentsCallback = new com.krux.androidsdk.aggregator.KruxSegments({
            getSegments: (segments: string) => {
                // Do something with segments.
            }
        });
        this.kruxEventAggregator.initialize(application.android.context, configId, kruxSegmentsCallback , debug);
    }

    public trackPageView(page: string, pageAttributes: any, userAttributes: any): void {
        this.kruxEventAggregator.trackPageView(page, pageAttributes, userAttributes)
    }

    public fireEvent(event: string, eventAttributes: any): void {
        this.kruxEventAggregator.fire(event, eventAttributes);
    }
}
