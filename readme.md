构建工具：webpack

webpack webpack-cli webpack-merge webpack-dev-serve

plugins:

    html-webpack-plugin  webpack.DefinePlugin
    clean-webpack-plugin copy-webpack-plugin
    mini-css-extract-plugin  //这个插件是 css 文件抽离，1. new plugin 2. style-loader 换成 plugin.loader
    optimize-css-assets-webpack-plugin // 压缩css文件的
    terser-webpack-plugin

    压缩插件希望在 optimization 中去打开

常用属性：

    entry output devServer devtool plugins modules optimization

loader:

    css : less-loader@5 postcss-loader@4 css-loader style-loader
    js/ts :  @babel/core @babel/preset-env @babel/preset-typescript(ts-loader) babel-loader
    图片/文件：file-loader url-loader

规范化： es-lint

    yarn add eslint --dev
    npx eslint --init   // 这里基本可以安装插件
        .eslintrc.js
    ts的支持：
        01  typescript  @typescript-eslint/parser
        02 parser : '@typescript-eslint/parser'
    rules :  'off' , error ,warn  三种模式
    global： 设置全局的一些配置

eslint 与 webpack 集成：

    eslint-loader , 这个应该放在语法校验的第一个loader，因为这样才能校验到源代码

lint-staged ： 目的是解决 lint 整个项目所需要花费的时间太多了，而 lint-stage 只需要 lint 占存区的代码

husky:

     1. npm i husky
     2. npx husky install
     3. npx husky add .husky/pre-commit "npm run lint-staged"
     4.

```js
     "lint-staged": {
         "src/**/*.{js,ts}": [
         "prettier --trailing-comma all --single-quote --write", // 两个选一个
         "eslint --ext .js,.ts src --fix",
         "git add "
         ]
     },

```
