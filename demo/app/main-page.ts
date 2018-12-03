import * as observable from 'tns-core-modules/data/observable';
import { SalesforceDMP, KeyValue } from '@essent/nativescript-salesforce-dmp';

export function pageLoaded(_args: observable.EventData) {
    SalesforceDMP.getInstance().initialize('sr5t5uf9i', true);
}

export function trackPageView(_args: any) {
    const attributes: KeyValue<string> = {
        testKey1: 'My page test value 1',
        testKey2: 'My page test value 2'
    };
    const attributesUser: KeyValue<string> = {
        testKey1: 'My user test value 1',
        testKey2: 'My user test value 2'
    };
    SalesforceDMP.getInstance().trackPageView('TestPage', attributes, attributesUser);
}

export function fireEvent(_args: any) {
    const attributes: KeyValue<string> = {
        event_id: 'YOUR_EVENT_ID', // NOTE: this attribute is mandatory
        testKey1: 'My event test value 1',
        testKey2: 'My event test value 2'
    };
    SalesforceDMP.getInstance().fireEvent('TestEvent', attributes);
}

export function setConsent(_args: any) {
    const consentAttributes: KeyValue<string> = {
        pr: '1',
        dc: '1',
        al: '1',
        tg: '1',
        cd: '1',
        sh: '0',
        re: '1'
    };
    SalesforceDMP.getInstance().setConsent(consentAttributes);
}

export function getConsent(_args: any) {
    SalesforceDMP.getInstance().getConsent();
}
export function removeConsent(_args: any) {
    SalesforceDMP.getInstance().removeConsent();
}
