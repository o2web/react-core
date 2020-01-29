export default function translatePath(path, t) {
  const translationPath = `routes.${path}`;
  const translatedPath = t(translationPath);
  return translatedPath === translationPath ? path : translatedPath;
}
