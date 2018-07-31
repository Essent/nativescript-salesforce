import { CommonSalesforceDMP } from './salesforce.common';

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

    public setConsent(): void {
        let consentAttributes = NSMutableDictionary.alloc().init();
        consentAttributes.setValueForKey("dc", "1");
        consentAttributes.setValueForKey("al", "1");
        consentAttributes.setValueForKey("tg", "1");
        consentAttributes.setValueForKey("cd", "1");
        consentAttributes.setValueForKey("sh", "1");
        consentAttributes.setValueForKey("re", "1");
        this.kruxTracker.consentSetRequest(consentAttributes)
    }

    public getConsent(): void {
        this.kruxTracker.consentGetRequest(null);
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
