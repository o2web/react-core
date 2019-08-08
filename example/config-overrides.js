const rewireSass = require('react-app-rewire-scss');
const rewireEslint = require('react-app-rewire-eslint');
const path = require('path');

module.exports = function override(config, env) {
  let newConfig = config;

  newConfig.output = {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/',
    filename: 'server.js',
    library: 'app',
    libraryTarget: 'commonjs2',
  };

  // rewire Sass
  newConfig = rewireSass(newConfig, env);

  // rewireEslint
  newConfig = rewireEslint(newConfig, env);
  return newConfig;
};
