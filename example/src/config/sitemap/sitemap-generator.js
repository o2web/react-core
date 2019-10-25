require('babel-register')({
  presets: ['react', 'env', 'stage-0'],
});

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;
const sitemapConfig = require('./sitemap-configs');

async function generateSitemap() {
  try {
    // Generate Sitemap
    const newSitemap = new Sitemap(router);
    const generatedSitemap = await sitemapConfig.configureSitemap(newSitemap);
    generatedSitemap.save('./build/static/sitemap.xml');
    return generatedSitemap;
  } catch (e) {
    console.log(e);
  } finally {
    console.log('New sitemap generated!');
  }
  process.exit();
}

generateSitemap();
