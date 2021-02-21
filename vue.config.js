module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "components": "@/components",
                "network": "@/network",
                "utils": "@/utils",
                "views": "@/views"
            }
        },
        devServer: {
            port: 8080,
            open: true
        }
    },
    publicPath: "./"
}