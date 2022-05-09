module.exports = {
    devServer: {
        Proxy: {
            "/api": {
                target: "https://www.zhihu.com",
            },
        },
    },
    configureWebpack: require("./webpack.config")
}