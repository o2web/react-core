import translations, { defaultLanguage } from '../../../example/src/config/locales/translations';

export default (breadcrumb, language = defaultLanguage) => {
  const breadcrumbPath = `breadcrumbs.${breadcrumb}`;
  const translatedBreadcrumbPart = translations[language][breadcrumbPath];

  if (!translatedBreadcrumbPart || translatedBreadcrumbPart === breadcrumbPath) {
    return breadcrumb;
  }

  return translatedBreadcrumbPart;
};
