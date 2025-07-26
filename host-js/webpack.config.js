const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    },
    entry: "./src/bootstrap.js",
    mode: "development",
    devServer: {
        port: 3001
    },
    output: {
        publicPath: "auto"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                level1: "level1@http://localhost:3002/remoteEntry.js"
            },
            shared: {
  react: { singleton: true, requiredVersion: '^19.1.0' },
  'react-dom': { singleton: true, requiredVersion: '^19.1.0' },
  'react-bootstrap': { singleton: true, requiredVersion: '^2.10.10' },
  'bootstrap': { singleton: true, requiredVersion: '^5.3.7' },
}
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]

}
