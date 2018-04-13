import androidcontentContext = android.content.Context;
import androidosBundle = android.os.Bundle;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.krux.androidsdk.aggregator.KruxConsentCallback.d.ts" />
/// <reference path="./com.krux.androidsdk.aggregator.KruxSegments.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module krux {
        export module androidsdk {
            export module aggregator {
                export class KruxEventAggregator {
                    public static fireEvent(param0: string, param1: androidosBundle): void;
                    public static transaction(param0: androidosBundle): void;
                    public static syncConfigAndSegmentsNow(): void;
                    public static startConfigAndSegmentsScheduler(): void;
                    public static close(): void;
                    public static consentGetRequest(param0: androidosBundle): void;
                    public static initialize(param0: androidcontentContext, param1: string, param2: com.krux.androidsdk.aggregator.KruxSegments, param3: boolean): void;
                    public static getSite(): string;
                    public static consumerPortabilityRequest(param0: androidosBundle): void;
                    public static consumerRemoveRequest(param0: androidosBundle): void;
                    public static logEvent(param0: string): void;
                    public static getOptout(): string;
                    public static initialize(param0: androidcontentContext, param1: string, param2: com.krux.androidsdk.aggregator.KruxSegments, param3: boolean, param4: string, param5: string, param6: com.krux.androidsdk.aggregator.KruxConsentCallback): void;
                    public static trackPageView(param0: string, param1: androidosBundle, param2: androidosBundle): void;
                    public constructor();
                    public static initialize(param0: androidcontentContext, param1: string, param2: com.krux.androidsdk.aggregator.KruxSegments, param3: boolean, param4: com.krux.androidsdk.aggregator.KruxConsentCallback): void;
                    public static getTransaction(): string;
                    public static getUserData(): string;
                    public static initialize(param0: androidcontentContext, param1: string, param2: com.krux.androidsdk.aggregator.KruxSegments, param3: boolean, param4: string, param5: string): void;
                    public static cancelConfigAndSegmentScheduler(): void;
                    public static getPixel(): string;
                    public static consentSetRequest(param0: androidosBundle): void;
                    public static getPublisherUuid(): string;
                    public static getEvent(): string;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module krux {
        export module androidsdk {
            export module aggregator {
                export class KruxSegments {
                    /**
                     * Constructs a new instance of the com.krux.androidsdk.aggregator.KruxSegments interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getSegments(param0: string): void;
                    });
                    public getSegments(param0: string): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module krux {
        export module androidsdk {
            export module aggregator {
                export class KruxConsentCallback {
                    /**
                     * Constructs a new instance of the com.krux.androidsdk.aggregator.KruxConsentCallback interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        handleConsentGetResponse(param0: string): void;
                        handleConsentGetError(param0: string): void;
                        handleConsentSetResponse(param0: string): void;
                        handleConsentSetError(param0: string): void;
                        handleConsumerRemoveResponse(param0: string): void;
                        handleConsumerRemoveError(param0: string): void;
                        handleConsumerPortabilityResponse(param0: string): void;
                        handleConsumerPortabilityError(param0: string): void;
                    });
                    public handleConsentSetError(param0: string): void;
                    public handleConsentGetResponse(param0: string): void;
                    public handleConsumerRemoveResponse(param0: string): void;
                    public handleConsumerPortabilityError(param0: string): void;
                    public handleConsentSetResponse(param0: string): void;
                    public handleConsentGetError(param0: string): void;
                    public handleConsumerRemoveError(param0: string): void;
                    public handleConsumerPortabilityResponse(param0: string): void;
                }
            }
        }
    }
}