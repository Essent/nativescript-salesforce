# NativeScript plugin for Salesforce DMP

This is a plugin to use the Salesforce DMP SDK ([Android](https://konsole.zendesk.com/hc/en-us/articles/226031268-Android-SDK-Implementation-Guide) v4.3.0, [iOS](https://konsole.zendesk.com/hc/en-us/articles/219986988-iOS-SDK-Implementation-Guide) v4.3.0). To use this plugin you need to have an account from Salesforce DMP.

## Installation

Run the following command from the root of your project:
```ts
tns plugin add @essent/nativescript-salesforce
```

## Setup (Android Only)

Make sure you add the following permissions to the AndroidManifest.xml file of your app:
```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

Add the following service to the application tag in the AndroidManifest.xml file of your app ([example](./demo/app/APP_Resources/Android/AndroidManifest.xml)):
```xml
<service android:name="com.krux.androidsdk.aggregator.EventPublisherService" android:enabled="true" />
```

Add play-services-ads to the dependencies in the app.gradle file of your app ([example](./demo/app/APP_Resources/Android/app.gradle)):
```
compile 'com.google.android.gms:play-services-ads:10.2.4'
```

## Usage

To use nativescript-ng-sentry you must first import the module:
```ts
mport { SalesForce, KeyValue } from '@essent/nativescript-salesforce';
```

At the launch of your app call `initialize` with your config id:
```ts
SalesForce.getInstance().initialize('abcdefghij', true);
```

To track page views call `trackPageView` (optionally you can use pageAttributes and userAttributes):
```ts
SalesForce.getInstance().trackPageView('TestPage', null, null);
```

To fire events call `fireEvent`:
```ts
const attributes: KeyValue<string> = {
    event_id: 'YOUR_EVENT_ID', // this attribute is mandatory
    myKey: 'An event value'
};
SalesForce.getInstance().fireEvent('TestEvent', attributes);
```
