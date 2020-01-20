const path = require("path");

function root(args) {
  return path.join(__dirname, args);
}

module.exports = {
  mode: "development",
  entry: {
    app: "./src"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: ["./public/", "./src"],
    historyApiFallback: true,
    port: 6060
  },
  output: {
    publicPath: "/",
    // path: root("dist/assets"),
    filename: "[name].js"
  }
};
