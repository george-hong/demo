const webpackBaseConfig = require('./webpack.base.config');
const WebpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');

webpackBaseConfig.plugins.push(new Uglify({
    uglifyOptions: {
        mangle: false,
        output: {
            comments: false
        },
    }
}))

module.exports = WebpackMerge(webpackBaseConfig, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
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
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
});