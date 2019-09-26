const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/build/',
    filename: 'server.js',
    library: 'app',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      components: path.resolve(__dirname, 'src/app'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
        exclude: /node_modules/,
      },
      {
        test: /\.(otf|svg|png)$/,
        loader: 'file-loader?emitFile=true',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|ttf|ico|eot)$/,
        loader: 'url-loader?emitFile=true',
        exclude: /node_modules/,
      },
    ],
  },
  externals: [webpackNodeExternals()],
  plugins: [
    new ExtractTextPlugin('./static/css/main.css'),
  ],
};
