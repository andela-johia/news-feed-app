let webpack = require('webpack');
let path = require('path');
const env = require('dotenv').config();

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
        use: [{
      loader: "style-loader" // creates style nodes from JS strings
    }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
      }

    ]
  },
  plugins: [
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
