# NativeScript plugin for Salesforce DMP

[![npm version](https://badge.fury.io/js/%40essent%2Fnativescript-salesforce-dmp.svg)](https://www.npmjs.com/package/@essent/nativescript-salesforce-dmp)

This is a plugin to use the Salesforce DMP SDK ([Android](https://konsole.zendesk.com/hc/en-us/articles/226031268-Android-SDK-Implementation-Guide) v4.3.2, [iOS](https://konsole.zendesk.com/hc/en-us/articles/219986988-iOS-SDK-Implementation-Guide) v4.3.0). To use this plugin you need to have an account for Salesforce DMP.

## Installation

Run the following command from the root of your project:
```console
tns plugin add @essent/nativescript-salesforce-dmp
```

## Setup (Android Only)

Make sure you add the following permissions to the AndroidManifest.xml file of your app:
```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

Add the following services to the application tag in the AndroidManifest.xml file of your app ([example](./demo/app/App_Resources/Android/AndroidManifest.xml)):
```xml
<service android:name="com.krux.androidsdk.aggregator.EventPublisherService" android:enabled="true" />
<service android:name="com.krux.androidsdk.aggregator.ConsentService" android:enabled="true" />
```

Add play-services-ads to the dependencies in the app.gradle file of your app ([example](./demo/app/App_Resources/Android/app.gradle)):
```gradle
compile 'com.google.android.gms:play-services-ads:10.2.4'
```

## Usage

To use nativescript-salesforce-dmp you must first import the module:
```ts
import { SalesforceDMP, KeyValue } from '@essent/nativescript-salesforce-dmp';
```

At the launch of your app call `initialize` with your config id:
```ts
SalesforceDMP.getInstance().initialize('YOUR_CONFIG_ID', true);
```


Before using Salesforce DMP the user needs to give consent. More information about these flags can be found on the [Salesforce DMP website](https://konsole.zendesk.com/hc/en-us/articles/360000486853-Consumer-Rights-Management-Concepts-Glossary-of-Terms).  
To set the consent:
```ts
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
```

To quickly remove all consent flags:
```ts
SalesforceDMP.getInstance().removeConsent();
```

To track page views call `trackPageView` (optionally you can use pageAttributes and userAttributes):
```ts
SalesforceDMP.getInstance().trackPageView('TestPage', null, null);
```

To fire events call `fireEvent`:
```ts
const attributes: KeyValue<string> = {
    event_id: 'YOUR_EVENT_ID', // this attribute is mandatory
    myKey: 'An event value'
};
SalesforceDMP.getInstance().fireEvent('TestEvent', attributes);
```
