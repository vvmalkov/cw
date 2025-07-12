const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/bootstrap.js",
    mode: "development",
    devServer: {
        port: 3000
    },
    output: {
        publicPath: "auto"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                level1: "level1@http://localhost:3001/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]

}