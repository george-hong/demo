const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: {
    main: path.join(__dirname, '../main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader',
        fallback: 'style-loader'
      })
    },{
      test: /\.less$/,
      use: ExtractTextPlugin.extract({  //将less抽取到公共css文件中
        use: 'css-loader!less-loader',
        fallback: 'style-loader'
      })
    }, {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
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