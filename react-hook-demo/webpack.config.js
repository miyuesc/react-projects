const webpack = require("webpack")
const path = require("path")

const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      path: path.join(__dirname, "dist")
    })
  ],
  devServer: {
    port: 8088,
    open: true,
    progress: true
  }
}
