# Add Analytics

Monetization events.
Session events.
Authentication events.
Feature events.

## Add Config
- Run the commands:
```bash
echo "REACT_APP_MOBILE_ANALYTICS_APP_ID=localhost-analytics-app" >> .env.local
echo "REACT_APP_MOBILE_ANALYTICS_APP_REGION=localhost_region" >> .env.local
echo "REACT_APP_MOCK_ANALYTICS_PROVIDER_BASEURL=https://localhost:8443/v1/apps/localhost-analytics-app" >> .env.local
```

## Getting Started

- Webapp/App:
    - Copy from *Alpha Project* the folder `analytics` into `src`.
    - Run 
    - Add to `App.tsx` the lines:
    ```javascript
    if (process.env.NODE_ENV === 'development') {
        Amplify.Analytics.addPluggable(new MockAnalyticsProvider());
    }
    Amplify.configure({
        ...config.aws,
        MockAnalytics: { baseUrl: config.mock_analytics_provider_baseurl }
    });
    ```
    - Add to `Dummy.tsx` the lines:
    ```javascript
    import { Analytics } from 'aws-amplify';
    import { ANALYTICS_PROVIDER } from 'analytics';
    const handleAnalytics = () => {
        Analytics.record({
            name: 'albumVisit', 
            attributes: {}, 
            metrics: { minutesListened: 30 }
        }, ANALYTICS_PROVIDER);
    }
    ```

- Website:
    - Add Google Tag Manager -> which includes Facebook Pixel as well.

