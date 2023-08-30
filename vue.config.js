const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        port: 9999,
        proxy: {
            '/api': {
                target: 'http://localhost:9090',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/oi':{
                target: 'http://localhost:9998',
                changeOrigin: true,
                pathRewrite: {
                    '^oi':''
                }
            }
        }
    }
})

