var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.jsx'],
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
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // este esta en ./dist
            template: 'index.html', // este esta en ./
        }),
    ]
}