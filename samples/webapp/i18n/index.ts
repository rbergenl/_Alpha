import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import nlTranslation from './locales/nl/translation.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: { translation: enTranslation },
            nl: { translation: nlTranslation },
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
            format: function(value, format, lng) {
                if (format === 'uppercase') return value.toUpperCase();
                if (format === 'currency') return new Intl.NumberFormat(lng, { style: 'currency', currency: (lng === 'en') ? 'USD' : 'EUR' }).format(value);
                if(value instanceof Date) return new Intl.DateTimeFormat(lng).format(value);
                return value;
            }
        },
    });

export default i18n;
