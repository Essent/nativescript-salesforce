export interface CommonSalesforceDMP {

    initialize(configId: string, debug: boolean): void;

    trackPageView(page: string, pageAttributes: any, userAttributes: any): void;

    fireEvent(event: string, eventAttributes: any): void;
}

export interface KeyValue<T> {
    [key: string]: T;
}
