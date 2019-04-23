const path = require('path')

const identifier = 'com.chatter.PawExtensions.AzureSASDynamicValue'

module.exports = {
  entry: './src/AzureSASDynamicValue.ts',
  mode: 'production',
  module: {
    rules: [{ test: /\.ts/, use: 'ts-loader', exclude: /node_modules/ }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'AzureSASDynamicValue.js',
    path: path.resolve(__dirname, 'build', identifier)
  }
}
