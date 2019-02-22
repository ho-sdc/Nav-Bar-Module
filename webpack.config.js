const path = require("path");

module.exports = {
  entry: "./client/src/index.jsx",
  watch: true,
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "./bundle.js"
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        loader:
          "style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]"
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|HEIC)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};
