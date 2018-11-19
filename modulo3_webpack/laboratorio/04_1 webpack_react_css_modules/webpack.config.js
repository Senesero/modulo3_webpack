var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    entry: {
        app: './students.jsx',
        vendor: [
            'react',
            'react-dom',
        ]
    },
    output: {
        filename: '[name].[chunkhash].bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                        camelCase: true,
                    },
                },
                "sass-loader",
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // este esta en ./dist
            template: 'index.html', // este esta en ./
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}