const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // main entry file
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // cleans old files from dist
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // allows CSS import
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // base HTML
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    open: true, // auto-opens browser
  },
  mode: "development",
};
