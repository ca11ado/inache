const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const configHtmlWebpackPlugin = { template: "src/index.html" };

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './js/app.js',

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'public'),
    publicPath: '/'
	},

	plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin(configHtmlWebpackPlugin),
    new MiniCssExtractPlugin()
  ],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'js')],
        loader: 'babel-loader',
			}, {
        test: /\.css$/i,
        use: [
          //'style-loader',
          {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }
        ],
      }

		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	},

  resolve: {
    alias: {
      js: path.resolve(__dirname, 'js/')
    },
  },

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  //stats: 'errors-only'
};
