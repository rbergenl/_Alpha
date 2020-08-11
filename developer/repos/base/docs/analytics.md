# Backend Analytics

## Initial Setup

- Add to `config-stack.ts` the lines:
```javascript
export const analyticsConfig = {
    appName: `${pascalCaseProjectName}Analytics`
};
```
- Add to `lib/<projectname>-base-stack.ts` the lines:
```javascript
import { analyticsConfig } from '../stack-config';
import { Analytics } from '../constructs/analytics';
new Analytics(this, 'Analytics', {
    appName: analyticsConfig.appName,
    authRole: auth.authRole,
    unAuthRole: auth.unAuthRole,
});
```

## Enable Mocking

- Add `app.use(bodyParser.json());`.
- Add `app.use('/v1/apps/localhost-analytics-app', analyticsRouter);`.
