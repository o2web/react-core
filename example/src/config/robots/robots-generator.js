const robotstxt = require('generate-robotstxt');
const fs = require('fs');

require('babel-register')({
  presets: ['react', 'env', 'stage-0'],
});

async function generateRobot() {
  robotstxt({
    policy: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${process.env.SITE_DOMAIN}sitemap.xml`,
  }).then(robot => {
    fs.writeFileSync('./build/static/robots.txt', robot, () => {
      console.log('Robots.txt generated!');
    });
  })
    .catch(error => {
      throw error;
    });
}

generateRobot();
