
interface KruxConsentCallback extends NSObjectProtocol {

	handleConsentGetError(consentGetError: string): void;

	handleConsentGetResponse(consentGetResponse: string): void;

	handleConsentSetError(consentSetError: string): void;

	handleConsentSetResponse(consentSetResponse: string): void;

	handleConsumerPortabilityError(consumerPortabilityError: string): void;

	handleConsumerPortabilityResponse(consumerPortabilityResponse: string): void;

	handleConsumerRemoveError(consumerRemoveError: string): void;

	handleConsumerRemoveResponse(consumerRemoveResponse: string): void;
}
declare var KruxConsentCallback: {

	prototype: KruxConsentCallback;
};

declare class KruxTracker extends NSObject implements KruxTrackerController {

	static alloc(): KruxTracker; // inherited from NSObject

	static getKruxSDKVersionNo(): string;

	static new(): KruxTracker; // inherited from NSObject

	static sharedEventTrackerWithConfigIdDebugFlagDryRunFlag(configId: string, debug: boolean, dryRun: boolean): KruxTracker;

	static sharedEventTrackerWithConfigIdDebugFlagDryRunFlagConfigHostJslogHost(confId: string, debugFlag: boolean, dryRunFlag: boolean, configHost: string, jslogHost: string): KruxTracker;

	static sharedEventTrackerWithConfigIdDebugFlagDryRunFlagConfigHostJslogHostConsentCallback(confId: string, debugFlag: boolean, dryRunFlag: boolean, configHost: string, jslogHost: string, consentCallback: NSObject): KruxTracker;

	static sharedEventTrackerWithConfigIdDebugFlagDryRunFlagConsentCallback(configId: string, debug: boolean, dryRun: boolean, consentCallback: NSObject): KruxTracker;

	configHost: string;

	readonly configId: string;

	consentCallback: NSObject;

	debug: boolean;

	dryRun: boolean;

	jslogHost: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	consentGetRequest(consentGetAttributes: NSDictionary<any, any>): void;

	consentSetRequest(consentSetAttributes: NSDictionary<any, any>): void;

	consumerPortabilityRequest(consumerPortabilityAttributes: NSDictionary<any, any>): void;

	consumerRemoveRequest(consumerRemoveAttributes: NSDictionary<any, any>): void;

	fireEventEventAttributesWithError(eventUid: string, eventAttributes: NSDictionary<any, any>): boolean;

	getSegments(): NSArray<any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startScheduler(): void;

	stopScheduler(): void;

	trackPageViewAttributes(section: string, attributes: NSDictionary<any, any>): void;

	trackPageViewPageAttributesUserAttributes(section: string, pageAttributes: NSDictionary<any, any>, userAttributes: NSDictionary<any, any>): void;

	trackTransactionWithAttributes(transactionAttributes: NSDictionary<any, any>): void;
}

interface KruxTrackerController extends NSObjectProtocol {

	consentGetRequest(consentGetAttributes: NSDictionary<any, any>): void;

	consentSetRequest(consentSetAttributes: NSDictionary<any, any>): void;

	consumerPortabilityRequest(consumerPortabilityAttributes: NSDictionary<any, any>): void;

	consumerRemoveRequest(consumerRemoveAttributes: NSDictionary<any, any>): void;

	fireEventEventAttributesWithError(eventUid: string, eventAttributes: NSDictionary<any, any>): boolean;

	trackPageViewAttributes(section: string, attributes: NSDictionary<any, any>): void;

	trackPageViewPageAttributesUserAttributes(section: string, pageAttributes: NSDictionary<any, any>, userAttributes: NSDictionary<any, any>): void;

	trackTransactionWithAttributes(transactionAttributes: NSDictionary<any, any>): void;
}
declare var KruxTrackerController: {

	prototype: KruxTrackerController;
};
