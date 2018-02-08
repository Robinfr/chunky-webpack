const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const config = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        chunkFilename: '[name].chunk.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'awesome-typescript-loader' },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports = merge.smart(config, {
        target: 'node',
        externals: [nodeExternals()],
        output: {
            library: 'sub-package-b',
            libraryTarget: 'umd'
        },
        plugins: [
            new UglifyJSPlugin({
                sourceMap: true
            })
        ]
    });
} else {
    module.exports = merge.smart(config, {
        plugins: [
            new HtmlWebpackPlugin()
        ]
    });
}