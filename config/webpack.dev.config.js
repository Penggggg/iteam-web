var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        vendor: './src/vendor.tsx',
        app: './src/index.tsx'
    },

    output: {
        filename: '[name].[hash].js',
        path: '/'
    },

    resolve: {
        extensions: [ ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx/, use: ['ts-loader'] },
            { test: /\.less/, use: ["style-loader", "css-loader", "less-loader"]}
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'app', 'vendor' ]
        }),       

        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:3000'
        }),

        new webpack.DefinePlugin({
          // set ENV=production
          'ENV': process.env.ENV ? JSON.stringify(process.env.ENV) : JSON.stringify('production')
      })

    ]

}