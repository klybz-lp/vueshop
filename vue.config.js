module.exports = {
    publicPath: "./",
    // host: "0.0.0.0",
    // port: 8080,
    // https: false,
    devServer: {
        proxy: {
            '/api': {
                target:"http://qywx.xydec.cn", //target host
                ws: false,  // proxy websockets
                changeOrigin: true, // needed for virtual hosted sites
            }
        },
    },
}