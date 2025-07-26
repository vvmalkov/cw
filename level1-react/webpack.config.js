const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/main.jsx',
  mode: 'development',
  devServer: {
    port: 3002,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'level1',
      filename: 'remoteEntry.js',
      exposes: {
        './level1-react': './src/level1app.jsx',
      },
      shared: {
  react: { singleton: true, requiredVersion: '^19.1.0' },
  'react-dom': { singleton: true, requiredVersion: '^19.1.0' },
  'react-bootstrap': { singleton: true, requiredVersion: '^2.10.10' },
  'bootstrap': { singleton: true, requiredVersion: '^5.3.7' },
}
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
