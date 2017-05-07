const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src/public')
const APP_DIR = path.resolve(__dirname, 'src/app')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: APP_DIR + '/index.html',
    filename: 'index.html',
    inject: 'body'
})

const config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module : {
        loaders : [
            {
                test : /\.jsx$/,
                include : APP_DIR,
                loader : 'babel-loader',
                query: { presets: ['es2015', 'react'] },
                exclude: /node_modules/
            },
            {
                test : /\.js$/,
                include : APP_DIR,
                loader : 'babel-loader',
                query: { presets: ['es2015', 'react'] },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;
