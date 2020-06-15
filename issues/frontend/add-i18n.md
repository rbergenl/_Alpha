# Internationalization

- Check the [docs](https://react.i18next.com/).
- Run `npm install react-i18next i18next --save`.
- Copy/paste from *Alpha Project* the `i18n` folder into `src`.
- Add to `index.tsx` the line `import './i18n';`.
- Add to `Dummy.tsx` the code:
```javascript
import { useTranslation } from 'react-i18next';
const { t } = useTranslation();
<p>{t('title', { date: new Date(), price: 12.34 })}</p>
```
- Add to `Header.tsx` the code:
```javascript
import { useTranslation } from 'react-i18next';
const { i18n } = useTranslation();
<button onClick={() => i18n.changeLanguage('en')}>EN</button>
<button onClick={() => i18n.changeLanguage('nl')}>NL</button>
```
