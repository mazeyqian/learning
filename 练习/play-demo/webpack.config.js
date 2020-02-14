const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'index.html'),
      inject: true,
      chunksSortMode: 'dependency'
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  module: {
    rules: [
        {
            test: /\.js$/,
             exclude: /node_modules/, 
             loader: "babel-loader"
        }
    ]
}
};