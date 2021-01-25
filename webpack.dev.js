const webpack = require('webpack');
const { web } = require("webpack");
// 只要改变一个字段就行(处理less和scss)
const precss = 'scss'
let usePreCss = ["style-loader","css-loader","sass-loader","postcss-loader"]
if (precss === 'less') {
    usePreCss = ["style-loader","css-loader","less-loader","postcss-loader"]
}


module.exports = {
    mode: 'development',
    // target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
    target: 'web',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
          {
              test: /\.(scss|less|css)$/,
              use: usePreCss
          }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        inline: true
    }
};