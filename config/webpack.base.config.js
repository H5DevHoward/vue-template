const webpack = require('webpack');
const postcssConfig = require('./postcss.config');

module.exports = {
    entry: './dev/main.js',
    output: {
        path: './dist',
        filename: '[name].js',
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.js',
        },
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue',
                options: {
                    postcss: postcssConfig.plugins,
                },
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css?sourceMap!postcss!sass',
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?limit=1024&name=font/[name].[ext]',
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'url-loader?mimetype=image/png',
            },
        ],
    },
    postcss: postcssConfig,
    vue: {
        loaders: {
            js: 'babel',
            scss: 'style!css!postcss!sass',
        },
        postcss: postcssConfig.plugins,
    },
};
