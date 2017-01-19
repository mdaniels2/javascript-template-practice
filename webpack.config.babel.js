import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';

export default {
  output: {
    filename: 'client-bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
  ],
};
