const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    'amap': {
      target: 'https://restapi.amap.com/v3/',//代理的接口地址
      changeOrigin: true,//允许跨域
      secure: true,
    },
  }

})

