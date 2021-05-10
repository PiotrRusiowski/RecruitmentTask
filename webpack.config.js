const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require("path");

module.exports = {
    cache: false,
    entry: ['./main.js', './styles/index.scss'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'global.css'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['*.html'],
            server: {
                baseDir: ['.']
            }
        })
    ],

    devtool: 'source-map'
}