import * as observable from 'tns-core-modules/data/observable';
import { SalesForce } from 'nativescript-salesforce';

export interface KeyValue<T> {
    [key: string]: T;
}

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(_args: observable.EventData) {
    SalesForce.getInstance().initialize('abcdefghij', true);
}

export function trackPageView(args: any) {
    const attributes: KeyValue<string> = {
        testKey1: 'My page test value 1',
        testKey2: 'My page test value 2'
    };
    const attributesUser: KeyValue<string> = {
        testKey1: 'My user test value 1',
        testKey2: 'My user test value 2'
    };
    SalesForce.getInstance().trackPageView('TestPage', attributes, attributesUser);
}

export function fireEvent(args: any) {
    const attributes: KeyValue<string> = {
        testKey1: 'My event test value 1',
        testKey2: 'My event test value 2'
    };
    SalesForce.getInstance().fireEvent('TestEvent', attributes);
}
