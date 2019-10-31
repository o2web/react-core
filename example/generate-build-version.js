const fs = require('fs');
const packageJson = require('./package.json');

const appVersion = packageJson.version;
const jsonContent = JSON.stringify({ version: appVersion });

fs.writeFile('./public/static/meta.json', jsonContent, 'utf8', (err) => {
  if (err) {
    console.log('An error occured while writing JSON Object to meta.json');
    return console.log(err);
  }

  return console.log('meta.json file has been saved with latest version number');
});
