const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src', 'index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main-bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    devtool: 'source-map',
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.js$/, use: ['source-map-loader'], enforce: 'pre' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};