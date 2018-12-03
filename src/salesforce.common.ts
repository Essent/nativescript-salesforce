export interface CommonSalesforceDMP {

    initialize(configId: string, debug: boolean): void;

    trackPageView(page: string, pageAttributes: any, userAttributes: any): void;

    fireEvent(event: string, eventAttributes: any): void;

    setConsent(consentAttributes: any): void;

    getConsent(): void;

    removeConsent(): void;
}

export interface KeyValue<T> {
    [key: string]: T;
}
