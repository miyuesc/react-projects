const webpack = require("webpack")
const path = require("path")

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/* -------- 预热线程 --------- */
const threadLoader = require("thread-loader")

const jsWorkerPool = {
  // options

  // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)
  // 当 require('os').cpus() 是 undefined 时，则为 1
  workers: 2,

  // 闲置时定时删除 worker 进程
  // 默认为 500ms
  // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
  poolTimeout: 2000
}

const cssWorkerPool = {
  // 一个 worker 进程中并行执行工作的数量
  // 默认为 20
  workerParallelJobs: 2,
  poolTimeout: 2000
}

threadLoader.warmup(jsWorkerPool, ["babel-loader"])
threadLoader.warmup(cssWorkerPool, ["css-loader", "postcss-loader"])

/* -------- 预热配置结束 --------- */

const webpackBaseConfig = {
  entry: path.join(__dirname, "../index.js"),
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".scss"],
    alias: {
      "@": path.join(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "thread-loader",
            options: jsWorkerPool
          },
          "babel-loader?cacheDirectory"
        ]
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          "cache-loader",
          {
            loader: "thread-loader",
            options: cssWorkerPool
          },
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "cache-loader",
          {
            loader: "thread-loader",
            options: cssWorkerPool
          },
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 3000, // size <= 3000B, 改成5000B试试?
              publicPath: "fonts/",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      path: path.join(__dirname, "../dist")
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public", "index.html"),
      filename: "index.html"
    })
  ]
}


module.exports = webpackBaseConfig
