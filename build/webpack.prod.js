const webpackBaseConfig = require('./webpack.base');
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge(webpackBaseConfig, {
    mode: 'production',
});