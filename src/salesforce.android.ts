import { CommonSalesforceDMP, KeyValue } from './salesforce.common';
import * as application from 'tns-core-modules/application';

declare const com: any;

export class SalesforceDMP implements CommonSalesforceDMP {

    private static instance: SalesforceDMP = new SalesforceDMP();
    private kruxEventAggregator: any = com.krux.androidsdk.aggregator.KruxEventAggregator;

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
        let kruxSegmentsCallback = new com.krux.androidsdk.aggregator.KruxSegments({
            getSegments: (_segments: string) => {
                // Do something with segments.
            }
        });

        let kruxConsentCallback = new com.krux.androidsdk.aggregator.KruxConsentCallback({
            handleConsentGetResponse: (consentGetResponse: string) => {
                console.log('handleConsentGetResponse', consentGetResponse);
            },
            handleConsentGetError: (consentGetError: string) => {
                console.log('handleConsentGetError', consentGetError);
            },
            handleConsentSetResponse: (consentSetResponse: string) => {
                console.log('handleConsentSetResponse', consentSetResponse);
            },
            handleConsentSetError: (consentSetError: string) => {
                console.log('handleConsentSetError', consentSetError);
            }
        });

        this.kruxEventAggregator.initialize(application.android.context, configId, kruxSegmentsCallback , debug, kruxConsentCallback);
    }

    public trackPageView(page: string, pageAttributes: any, userAttributes: any): void {
        this.kruxEventAggregator.trackPageView(page, this.keyValuesToBundle(pageAttributes), this.keyValuesToBundle(userAttributes));
    }

    public fireEvent(event: string, eventAttributes: any): void {
        this.kruxEventAggregator.fireEvent(event, this.keyValuesToBundle(eventAttributes));
    }

    public setConsent(): void {
        let attributeBundle = new android.os.Bundle();
        attributeBundle.putInt("dc", 1);
        attributeBundle.putInt("al", 1);
        attributeBundle.putInt("tg", 1);
        attributeBundle.putInt("cd", 1);
        attributeBundle.putInt("sh", 1);
        attributeBundle.putInt("re", 1);
        this.kruxEventAggregator.consentSetRequest(attributeBundle);
    }

    public getConsent(): void {
        this.kruxEventAggregator.consentGetRequest(null);
    }

    private keyValuesToBundle(keyValues: KeyValue<any>): any {
        if (keyValues == null) {
            return null;
        }

        let bundle = new android.os.Bundle();
        for (let i = 0; i < Object.keys(keyValues).length; i++) {
            let key = Object.keys(keyValues)[i];
            bundle.putString(key, keyValues[key]);
        }
        return bundle;
    }
}
