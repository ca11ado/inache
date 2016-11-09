let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './js/app.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].css')
  ] : [new ExtractTextPlugin('[name].css')],

  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')},
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

//https://github.com/css-modules/webpack-demo