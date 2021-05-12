const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Optimization
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//
const paths = {
    src: path.resolve(__dirname, "src"),
}

//
module.exports = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "docs"),
        publicPath: "",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            favicon: path.resolve(__dirname, "src", "assets", "index-favicon.ico"),
            chunks: ["index"],
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.join("src", "assets", "images", "skills"),
                    to: path.join("assets", "images", "skills")},
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,  // "style-loader",
                      "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,  // "style-loader",
                      "css-loader",
                      "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {   test: /\.(ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'file-loader'
            },
            {   test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff2'
                }
            },
            {   test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: {
                        root: paths.src,
                    },
                },
            },
            {
                test: /\.(hbs|handlebars)$/i,
                loader: "handlebars-loader",
            },
        ],
    },
};
