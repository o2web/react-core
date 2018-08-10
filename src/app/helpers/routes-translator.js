import translations, { defaultLanguage as defaultLang, rawTranslations } from '../../../example/src/config/locales/translations';

function routeLanguageSwitcher(route, currentLanguage = defaultLang, newLanguage = defaultLang) {
  const reverseRoutes = {};
  Object.keys(rawTranslations[currentLanguage].routes)
    .forEach((key) => reverseRoutes[rawTranslations[currentLanguage].routes[key]] = key);

  const translatedRoute = route.split('/').map((routePart) => {
    if (!reverseRoutes[routePart]) {
      return routePart;
    }

    const translationPath = `routes.${reverseRoutes[routePart]}`;
    const translatedRoutePart = translations[newLanguage][translationPath];

    if (!translatedRoutePart) {
      return routePart;
    }

    return translatedRoutePart;
  });

  return `/${translatedRoute.filter(Boolean).join('/')}`;
}

function routeTranslator(route, language = defaultLang) {
  const translatedRoute = route.split('/').map((routePart) => {
    const translationPath = `routes.${routePart}`;
    const translatedRoutePart = translations[language][translationPath];

    if (!translatedRoutePart || translatedRoutePart === translationPath) {
      return routePart;
    }

    return translatedRoutePart;
  });

  return `/${translatedRoute.filter(Boolean).join('/')}`;
}

export { routeLanguageSwitcher };
export default routeTranslator;
