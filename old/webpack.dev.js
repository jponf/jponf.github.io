const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: "development",
});

// module.exports["plugins"].push(new BundleAnalyzerPlugin());
