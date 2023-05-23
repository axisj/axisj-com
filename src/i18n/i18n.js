import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    ko: {
        translation: {
            toggleButton: '토글',
        },
    },
    en: {
        translation: {
            toggleButton: 'Toggle',
        },
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        preload: ['ko', 'en'],
        fallbackLng: 'ko',
        interpolation: {
            escapeValue: false,
        },
        // ns: ['translations'],
        // defaultNS: 'translations',
        // backend: {
        //     loadPath: `${appSrc}/locales/{{lng}}/{{ns}}.json`,
        //     addPath: `${appSrc}/locales/{{lng}}/{{ns}}.missing.json`,
        // },
    });

export default i18n;