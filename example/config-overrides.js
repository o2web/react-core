const rewireSass = require('react-app-rewire-scss');
const rewireEslint = require('react-app-rewire-eslint');
const path = require('path');

module.exports = function override(config, env) {
  let newConfig = config;

  // rewire Sass
  newConfig = rewireSass(newConfig, env);

  // rewireEslint
  newConfig = rewireEslint(newConfig, env);
  return newConfig;
};
