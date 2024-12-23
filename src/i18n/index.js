import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ru from './locales/ru.json';
import tt from './locales/tt.json';

i18n
  .use(LanguageDetector) // Определение языка браузера
  .use(initReactI18next) // Подключение к React
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      tt: { translation: tt },      
    },
    fallbackLng: 'ru', // Язык по умолчанию
    interpolation: {
      escapeValue: false, // Для React экранирование не нужно
    },
    detection: {
      order: ['localStorage', 'navigator'], // Определение языка
      caches: ['localStorage'], // Кэширование языка
    },
  });

export default i18n;
