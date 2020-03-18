const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolvePath = dir => path.join(__dirname, '..', dir);

const config = {
  entry: {
    main: path.join(__dirname, '../main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  resolve: {
    alias: {
      '@components': resolvePath('src/components'),
      '@request': resolvePath('config/request/request.js'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : path.join(__dirname, "../src/pages/index.html"),
      filename : 'index.html'
    }),
    new ExtractTextPlugin("main.css")
  ]
};

module.exports = config;