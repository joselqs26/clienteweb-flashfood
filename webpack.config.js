const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      buffer: require.resolve("buffer/"),
      os: require.resolve("os-browserify"),
      path: require.resolve("path-browserify"),
    },
  },
}