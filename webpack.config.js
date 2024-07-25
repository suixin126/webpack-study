const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: path.resolve(__dirname,'src/login/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/login'),
    filename: 'login.js',
  },
  plugins: [
    new HtmlWebpackPlugin(
      { 
        template: path.resolve(__dirname,'public/login.html'),
        filename: path.resolve(__dirname,'dist/login/index.html')
       }
    ),
    new MiniCssExtractPlugin()
  ],
  module:{
    rules:[
      {
        test:/\.css$/i,
        // use:["style-loader","css-loader"],
        use:[MiniCssExtractPlugin.loader,"css-loader"]
      },
    ],
  },
};