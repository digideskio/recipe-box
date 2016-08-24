var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'static', 'recipes');
var APP_DIR = path.resolve(__dirname, 'js');

var config = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loader: "css-loader!sass-loader"
      }
    ]
  }
};

module.exports = config;