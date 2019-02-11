const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.jsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
  },
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      { test: /\.css$/, use: ["css-loader", "style-loader"] },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, "src"),
        use: "babel-loader",
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".webpack.js", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
};
