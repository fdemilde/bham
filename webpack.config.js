'use strict';
const webpack = require('webpack'),
  path = require('path'),
  APP = __dirname + '/app';

module.exports = {
  context: APP,
  entry: {
    app: ['webpack/hot/dev-server', './core/bootstrap.js']
  },
  output: {
    path: APP,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.js$/,
      loader: 'ng-annotate!babel?presets[]=es2015!jshint',
      exclude: /node_modules|bower_components/
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
      loader: 'file-loader?name=res/[name].[ext]?[hash]'
    }, {
      test: /\.json/,
      loader: 'json'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'raw',
      exclude: /node_modules/
    }]
  },
  resolve: {
    root: APP
  },
  plugins: [
    new webpack.DefinePlugin({
      MODE: {
        production: process.env.NODE_ENV === 'production'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
