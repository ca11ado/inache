let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PRODUCTION_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
];

module.exports = {
  entry: './js/app.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    ...(process.env.NODE_ENV === 'production' ? PRODUCTION_PLUGINS : []),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],

  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    rules: [
      { test: /\.js$/, exclude: /node_modules\/(?!(t0s-components)\/).*/, loader: 'babel-loader?presets[]=env&presets[]=react' },
      { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ]},
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
};

