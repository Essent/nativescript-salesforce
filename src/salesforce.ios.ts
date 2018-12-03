import { CommonSalesforceDMP, KeyValue } from './salesforce.common';

declare const KruxTracker;
declare const KruxConsentCallback;

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
        const callback = KruxConsentCallbackImpl.alloc().init();
        this.kruxTracker = KruxTracker.sharedEventTrackerWithConfigIdDebugFlagDryRunFlagConsentCallback(configId, debug, false, callback)
    }

    public trackPageView(page: string, pageAttributes: any, userAttributes: any): void {
        this.kruxTracker.trackPageViewPageAttributesUserAttributes(page, pageAttributes, userAttributes);
    }

    public fireEvent(event: string, eventAttributes: any): void {
        this.kruxTracker.fireEventEventAttributesWithError(event, eventAttributes);
    }

    public setConsent(consentAttributes: any): void {
        this.kruxTracker.consentSetRequest(consentAttributes)
    }

    public getConsent(): void {
        this.kruxTracker.consentGetRequest(null);
    }

    public removeConsent(): void {
        const consentAttributes: KeyValue<string> = {
            pr: '0',
            dc: '0',
            al: '0',
            tg: '0',
            cd: '0',
            sh: '0',
            re: '0'
        };
        this.kruxTracker.consentSetRequest(consentAttributes)
    }
}

export class KruxConsentCallbackImpl extends NSObject {
    public static ObjCProtocols: Object = [KruxConsentCallback];

    public handleConsentGetResponse(consentGetResponse: string): void {
        console.log('handleConsentGetResponse', consentGetResponse);
    }

    public handleConsentGetError(consentGetError: string): void {
        console.log('handleConsentGetError', consentGetError);
    }

    public handleConsentSetError(consentSetError: string): void {
        console.log('handleConsentSetError', consentSetError);
    }

    public handleConsentSetResponse(consentSetResponse: string): void {
        console.log('handleConsentSetResponse', consentSetResponse);
    }

    public handleConsumerPortabilityError(consumerPortabilityError: string): void {
        console.log('handleConsumerPortabilityError', consumerPortabilityError);
    }

    public handleConsumerPortabilityResponse(consumerPortabilityResponse: string): void {
        console.log('handleConsumerPortabilityResponse', consumerPortabilityResponse);
    }

    public handleConsumerRemoveError(consumerRemoveError: string): void {
        console.log('handleConsumerRemoveError', consumerRemoveError);
    }

    public handleConsumerRemoveResponse(consumerRemoveResponse: string): void {
        console.log('handleConsumerRemoveResponse', consumerRemoveResponse);
    }
}
