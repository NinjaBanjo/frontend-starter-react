var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

var PROD = (process.env.PROD);

var config = {
  entry: {
    index: './js/index',
    vendor: ['bluebird', 'axios', 'react', 'react-router', 'react-bootstrap', 'react-router-bootstrap', 'alt', 'jquery', 'bootstrap/less/bootstrap.less', 'bootstrap/dist/js/bootstrap.js']
  },
  output: {
    path: path.join(__dirname, '/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    root: [__dirname, path.resolve('./less')],
    extensions: ['', '.js', '.jsx'],
    alias: {
      'es6-promise': 'bluebird'
    }
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loader: 'babel?optional[]=runtime', exclude: /node_modules/},
      {test: /\.less$/, loader: 'style!css!autoprefixer!less'},
      {test: /\.(eot|ttf|woff|woff2|svg)/, loader: 'file?name=[sha512:hash:base64:12].[ext]'},
      { test: /\.(jpg|jpeg|png)$/, loader: 'url-loader?limit=15000' }
    ]
  },
  plugins: [
    new Clean(['assets']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Promise: 'bluebird'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  devServer: {
    contentBase: './assets',
    hot: true,
    inline: true,
    noInfo: true
  }
};

if(PROD) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

module.exports = config;