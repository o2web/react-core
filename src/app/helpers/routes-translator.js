function routeLanguageSwitcher(route, translations, currentLanguage, newLanguage) {
  const reverseRoutes = {};
  Object.keys(translations[currentLanguage])
    .filter((translationKey) => translationKey.includes('routes'))
    .forEach((key) => reverseRoutes[translations[currentLanguage][key]] = key);

  const translatedRoute = route.split('/').map((routePart) => {
    if (!reverseRoutes[routePart]) {
      return routePart;
    }

    const translationPath = reverseRoutes[routePart];
    const translatedRoutePart = translations[newLanguage][translationPath];

    if (!translatedRoutePart) {
      return routePart;
    }

    return translatedRoutePart;
  });

  return `/${translatedRoute.filter(Boolean).join('/')}`;
}

function translateRoute(route, t) {
  const translatedRoute = route.split('/').map((routePart) => {
    const translationPath = `routes.${routePart}`;
    const translatedRoutePart = t(translationPath);

    if (!translatedRoutePart || translatedRoutePart === translationPath) {
      return routePart;
    }

    return translatedRoutePart;
  });

  return `/${translatedRoute.filter(Boolean).join('/')}`;
}

export { routeLanguageSwitcher };
export default translateRoute;
