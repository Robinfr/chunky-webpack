const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        chunkFilename: '[name].chunk.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    './src',
                    'sub-package-b'
                ],
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },

            { test: /\.js$/, use: ['source-map-loader'], enforce: 'pre' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};