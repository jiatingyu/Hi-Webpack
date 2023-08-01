// ts-check
const path = require('path')
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
console.log('process.env.NODE_ENV：', process.env.NODE_ENV, isDev)
/** @type { webpack.Configuration } */
module.exports = {
  entry: { root: './src/index.tsx' },
  output: {
    filename: 'root.[hash:8].js',
    path: path.resolve('dist'),
    // publicPath: './',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.less', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // 自己来实现这个插件
          isDev
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader, // 这个地方应该根据环境来判断
                options: {
                  // publicPath: '/public/path/to/', // 文件内部的路径
                  publicPath: '', // 文件内部的路径
                },
              },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            },
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash:8].css',
      chunkFilename: isDev ? '[name].css' : '[id].[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'webpack test',
      css: 'http://localhost:3000',
      template: './index.html',
    }),
    new WebpackManifestPlugin({}),
  ],
}
