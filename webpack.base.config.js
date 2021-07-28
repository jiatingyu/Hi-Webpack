const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
    // publicPath: './assets'
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // // { loader: 'style-loader' },
          // {
          //   loader: 'file-loader',
          //   options: {
          //     outputPath: 'assets',
          //     publicPath: 'dist'
          //   }
          // },
          // 自己来实现这个插件
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/path/to/' // 文件内部的路径
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript']
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
