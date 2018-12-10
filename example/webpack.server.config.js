const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
        exclude: /node_modules/,
      },
    ],
  },
  externals: [webpackNodeExternals()],
  plugins: [
    new ExtractTextPlugin('build/static/css/main.css'),
  ],
};
