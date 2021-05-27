const webpack = require("webpack")
const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const { merge } = require("webpack-merge")

const webpackBaseConfig = require("./webpack.base.config");

const webpackProdConfig = {
  mode: "production",
  output: {
    publicPath: __dirname + "/dist/", // 打包后资源文件的引用会基于此路径
    path: path.join(__dirname, "../dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {}
      })
    ]
  }
}

module.exports = merge(webpackBaseConfig, webpackProdConfig)
