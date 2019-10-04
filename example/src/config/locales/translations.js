import fr from './fr/index';
import en from './en/index';
import parse from './common';

const translations = {
  fr: parse(fr),
  en: parse(en),
};

export const defaultLanguage = process.env.REACT_APP_REGION_DEFAULT_LOCALE;
export const availableLanguages = Object.keys(translations);

export default translations;
