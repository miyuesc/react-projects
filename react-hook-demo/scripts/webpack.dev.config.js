const webpack = require("webpack")
const path = require("path")
const { merge } = require("webpack-merge")

// 分析打包时间
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin()

const webpackBaseConfig = require("./webpack.base.config")

const webpackDevConfig = {
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    port: 8088,
    open: true,
    progress: true,
    contentBase: path.join(__dirname, "../src")
  }
}

module.exports = smp.wrap(merge(webpackBaseConfig, webpackDevConfig))
