
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const precss = 'scss'
let usePreCss = [MiniCssExtractPlugin.loader,"css-loader","sass-loader","postcss-loader"]
if (precss === 'less') {
    usePreCss = [MiniCssExtractPlugin.loader,"css-loader","less-loader","postcss-loader"]
}

module.exports = {
    mode: 'production',
    target: 'browserslist',
    //警告 webpack 的性能提示
    performance: {
      hints:'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
    module: {
        rules: [
          {
            test: /\.(scss|less|css)/,
            use: usePreCss
          }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new UglifyjsWebpackPlugin({
                cache: false,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/main.min.css"
        })
    ]
};