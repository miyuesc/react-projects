const webpack = require("webpack")
const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const { merge } = require("webpack-merge")

const webpackBaseConfig = require("./webpack.base.config");

const webpackProdConfig = {
  mode: "production",
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
