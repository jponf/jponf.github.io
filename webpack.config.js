const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = {
    src: path.resolve(__dirname, "src"),
}

module.exports = {
    mode: "development",  // production | development | none
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "docs"),
    },
    plugins: [
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
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
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
