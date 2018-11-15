var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');
var path = require('path');

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    entry: {
        app: './students.js',
        appStyles: [
            './mystyles.scss',
        ],
        vendor: [
            'jquery'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
        ]
    },
    output: {
        filename: '[name].[chunkhash].bundle.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true,
                }
            }
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=2000',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // este esta en ./dist
            template: 'index.html', // este esta en ./
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}