const BaseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge')
const { output } = require('./webpack.base.config')
module.exports = merge(BaseConfig, {
  mode: 'development',
  devServer: {
    port: 8000,
    contentBase: './public'
  },
  devtool: 'cheap-module-source-map',

  plugins: [
    // css 文件抽离

    new OptimizeCssAssetsWebpackPlugin(),
    new webpack.DefinePlugin({
      BaseUrl: JSON.stringify('http://localhost:8000')
    })
  ]
})
