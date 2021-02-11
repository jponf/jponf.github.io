const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    src: path.resolve(__dirname, "src"),
}

module.exports = {
    mode: "development",  // production | development | none
    entry: {
        index: "./src/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            chunks: ["index"],
        }),
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
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
                test: /\.(png|svg|jpg|jpeg|git)$/i,
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
        ],
    },
};
