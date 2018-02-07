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
        filename: 'main-bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.js$/, use: ['source-map-loader'], enforce: 'pre' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};