const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const env = require('./env.config');

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        app: './students.ts',
        appStyles: [
            './mystyles.scss',
        ],
    },
    output: {
        filename: '[name].[chunkhash].bundle.js'
    },
    devServer: {
        port: env.PUERTO,
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
            options: {
                useBabel: true,
                "babelCore": "@babel/core", // needed for Babel 7
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
            ]
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // este esta en ./dist
            template: 'index.html', // este esta en ./
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env.ENTORNO': JSON.stringify(env.ENTORNO),
            'process.env.PUERTO': JSON.stringify(env.PUERTO),
        }),
    ]
};