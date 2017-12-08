
var path = require('path');
const webpack = require('webpack');

// index.html
var HtmlWebpackPlugin = require('html-webpack-plugin');
var indexHtml = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: true
});

var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/app.js',
    vendor: [
     'jquery'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    indexHtml,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
};
