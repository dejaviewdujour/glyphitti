const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.jsx"),
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
  devtool:
    process.env.NODE_ENV === "development" && "cheap-module-eval-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/assets"),
        to: path.resolve(__dirname, "dist/assets"),
      },
      {
        from: path.resolve(__dirname, "src/demo.html"),
        to: path.resolve(__dirname, "dist/demo.html"),
      },
    ]),
  ],
  resolve: {
    extensions: [".webpack.js", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
};
