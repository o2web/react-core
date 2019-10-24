async function configureSitemap(newSitemap) {

  // Add params for routes here
  const paramsConfig = {};

  newSitemap.applyParams(paramsConfig)
    .build(process.env.SITE_DOMAIN);

  // Add changefreq to dynamic routes in sitemap.xml
  for (let i = 0; i < newSitemap.sitemaps[0].urls.length; i++) {
    newSitemap.sitemaps[0].urls[i].changefreq =  process.env.CHANGE_FREQUENCY;
  }

  return newSitemap;
}

module.exports.configureSitemap = configureSitemap;
