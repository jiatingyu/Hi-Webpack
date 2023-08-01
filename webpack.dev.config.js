const BaseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')
module.exports = merge(BaseConfig, {
  mode: 'development',
  watch: true,
  devServer: {
    port: 8000,
    contentBase: path.resolve(__dirname, 'public'),
  },
  devtool: 'cheap-module-source-map',

  plugins: [
    // @ts-ignore
    new OptimizeCssAssetsWebpackPlugin(),
    new webpack.DefinePlugin({
      BaseUrl: JSON.stringify('http://localhost:8000'),
    }),
  ],
})
