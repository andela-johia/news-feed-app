let webpack = require('webpack');
let path = require('path');
const env = require('dotenv').config();
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const css = require('!css-loader!resolve-url-loader!sass-loader?sourceMap!./file.scss')

//var BUILD_DIR = path.resolve(__dirname, 'dist');

let config = {
  entry: './app/components/main.jsx',
  output: {
    filename: 'bundle.js',
    path:__dirname +'/public'
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  devServer:{
    historyApiFallback: true,
  },
  module: {

    rules:[
		    {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
      loader: 'babel-loader',
      options: {
                  presets: ['es2015','react']
                }
    }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader','resolve-url-loader', 'sass-loader?sourceMap'],
        }),
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader','resolve-url-loader'],
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  plugins: [
   new ExtractTextPlugin('css/style.css'),
   new webpack.DefinePlugin({
      'process': {
        'env': {
          'API_KEY': JSON.stringify(process.env.API_KEY),
          'GOOGLE_ID': JSON.stringify(process.env.GOOGLE_ID)
        }
      }
    })
  ],


};

module.exports = config;
