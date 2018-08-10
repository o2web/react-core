import fr from './fr/index';
import en from './en/index';
import parse from './common';

const translations = {
  fr: parse(fr),
  en: parse(en),
};

export const rawTranslations = { fr, en };
export const defaultLanguage = 'fr';
export const availableLanguages = Object.keys(translations);

export default translations;
