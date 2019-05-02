const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require("path");

const extractSass = new ExtractTextPlugin({
  filename: 'public/app.css'
})

function sassRules() {
  return [
    {
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
    }
  ]
}

function scriptRules() {
  return [
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-env'] }
    }
  ]
}

module.exports = {
  mode: "development",
  entry: [
    './resources/assets/scss/style.scss',
    './resources/assets/scripts/main.js'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: sassRules().concat(scriptRules())
  },
  plugins: [
    extractSass
  ]
}