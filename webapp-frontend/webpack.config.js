const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [];

const config = {
    entry: "./src/index.js",
    output: {
        filename: "webapp.dist.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist/"),
        compress: true,
        port: 5500
    }
}

module.exports = (env, argv) => {
    if (argv.mode === "production") {
        plugins.push(
            new HtmlWebpackPlugin({
                hash: true,
                minify: {
                    html5: true,
                    collapseWhitespace: true,
                    removeComments: true
                },
                filename: "index.html",
                template: path.join(__dirname, "/template.html")
            })
        );
    } else {
        config.devtool = "source-map";
        plugins.push(
            new HtmlWebpackPlugin({
                hash: true,
                minify: false,
                filename: "index.html",
                template: path.join(__dirname, "/template.html")
            })
        );
    }

    config.plugins = plugins;
    config.mode = argv.mode;
    
    return config;
}