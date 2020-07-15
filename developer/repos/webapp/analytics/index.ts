import { AnalyticsProvider } from '@aws-amplify/analytics';
import Axios from 'axios';

interface MockAnalyticsProviderConfig {
    baseUrl: string;
}
interface MockAnalyticsProviderRecordParams {
    name: string;
    attributes: Record<string, any>;
    metrics: Record<string, any>
}

export default class MockAnalyticsProvider implements AnalyticsProvider {

    private baseUrl = '';
    private sessionId = 'cb928601-a4fd-11ea-9a6a-f7e86bbeab40';

    static category = 'Analytics';
    static providerName = 'MockAnalytics';

    configure(config: MockAnalyticsProviderConfig): MockAnalyticsProviderConfig {
        this.baseUrl = config.baseUrl;
        return config;
    };

    async record(params: MockAnalyticsProviderRecordParams): Promise<boolean> {
        const batchItemId = '018659b0-a4fb-11ea-8cc4-0bf5774eb413';
        const eventId = 'cb928602-a4fd-11ea-9a6a-f7e86bbeab40';
        const timeStamp = new Date().toJSON();

        const data = {
            BatchItem: {
                [batchItemId]: {
                    Endpoint: {},
                    Events: {
                        [eventId]: {
                            Timestamp: timeStamp,
                            Session: {
                                Id: this.sessionId,
                                StartTimestamp: timeStamp
                            },
                            Attributes: params.attributes,
                            EventType: params.name,
                            Metrics: params.metrics
                        }
                    }
                }
            }
        };

        const response = await Axios.post(this.baseUrl + '/events', data);

        if (response.data.Results[batchItemId].EventsItemResponse[eventId].StatusCode === 202) {
            return true;
        }

        return false;
    };

    getCategory(): string {
        return MockAnalyticsProvider.category;
    };

    getProviderName(): string {
        return MockAnalyticsProvider.providerName;
    };
}

export const ANALYTICS_PROVIDER = process.env.NODE_ENV === 'development' ? MockAnalyticsProvider.providerName : '';
