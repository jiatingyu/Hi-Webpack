const BaseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
module.exports = (env) => {
  console.log('env:', env)

  // @ts-ignore
  return merge(BaseConfig, {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin(),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        BaseUrl: JSON.stringify('http://localhost:4000'),
      }),
    ],
  })
}
