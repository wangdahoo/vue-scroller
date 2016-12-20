var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './demo/main.js',
  output: {
    path: path.resolve(__dirname, './docs'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, './node_modules')],
    alias: {
      'scroller': path.resolve(__dirname, './src'),
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /vue-scroller.src.*?js$/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  if (process.env.BUILD == 'publish') { // Make distribution
    var pkg = require('./package.json');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'vue-scroller.min.js'
      },
      resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, './node_modules')]
      },
      resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
      },
      module: {
        loaders: [
          {
            test: /\.vue$/,
            loader: 'vue'
          },
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
              limit: 10000,
              name: '[name].[ext]?[hash]'
            }
          }
        ]
      },
      devtool: '#source-map',

      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
      ]
    }

  } else { // Make doc
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html

    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin()
    ])
  }
}
