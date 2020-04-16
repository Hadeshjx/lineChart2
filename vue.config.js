module.exports = {
    publicPath:'./',
    configureWebpack:{
        performance:{
            maxEntrypointSize:50000000,
            maxAssetSize: 30000000,
        }
    }
}