var webpack = require('webpack');

var exclusionRegexs = [
    /node_modules/,
    /typings/
];

module.exports = {
    context: __dirname + '/App',
    output: {
        path: '../Typescripting.Web/Scripts',
        filename: 'bundle.js'
    },

    entry: {
        app: "./app.ts",
        vendor: ['angular', 'angular-ui-router', 'angular-ui-bootstrap', 'angular-local-storage', 'moment'],
    },
    
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    
    //devtool: 'source-map',
    
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw', exclude: exclusionRegexs },
            { test: /\.css$/, loader: 'style!css', exclude: exclusionRegexs },
            { test: /\.ts$/, loader: 'ts-loader' }
        ],
        /*preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ]*/
    }
};