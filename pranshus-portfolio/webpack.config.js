{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules')
}