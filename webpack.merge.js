const { merge } = require('webpack-merge')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
const commonConfig = {
  entry: {
      "./src/index": ['@babel/polyfill', __dirname+'/src/index.js']
  },
  output: {
      path: __dirname+ '/build',
      filename: 'js/bundle_[hash:8].js'
  },
  resolve:{
      extensions:['.js','.jsx'],
      //添加一下代码，请注意/app此地址，如果我们的目录结果是src为主目录则写src。
      alias:{
          '@':`${__dirname}/src/`
      }
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          },
          {
              test: /\.html$/,
              use: [
                  {
                      loader: "html-loader"  // 用于实现资源复用，比如我们的组件
                  }
              ]
          },
          {
              test: /\.(png|gif|jpg|jpeg)$/,
              use: {
                  loader: 'url-loader',
                  options: {
                      limit: 1024,
                      outputPath: 'imgs/',
                      esModule: false
                  }
              }
          }
      ]
  },
  plugins: [
      new HtmlWebPackPlugin({
          template: "./publish/index.html",
          filename: "./index.html",
          hash: true,
          cache: false,
          chunks: ['./src/index']
      }),
      new CleanWebpackPlugin()
  ]
}



module.exports = (mode) => {
  // console.log(mode.WEBPACK_BUILD)
  if (mode && mode.WEBPACK_BUILD) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}