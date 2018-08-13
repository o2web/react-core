export default (breadcrumb, t) => {
  const breadcrumbPath = `breadcrumbs.${breadcrumb}`;
  const translatedBreadcrumbPart = t(breadcrumbPath);

  if (!translatedBreadcrumbPart || translatedBreadcrumbPart === breadcrumbPath) {
    return breadcrumb;
  }

  return translatedBreadcrumbPart;
};
