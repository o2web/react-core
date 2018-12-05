const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

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
      // {
      //   test: /\.scss|css$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      //   exclude: /node_modules/,
      // },
    ],
  },
  externals: [webpackNodeExternals()],
};
