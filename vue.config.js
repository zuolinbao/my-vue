const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        '@s':path.join(__dirname, 'src/assets/style')
      }
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.scss$/,
    //       use: [
    //         'sass-loader'
    //       ]
    //     },
    //     {
    //       test: /\.less$/,
    //       use: [
    //         'less-loader'
    //       ]
    //     }
    //   ]
    // },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@s/common.scss";` // 路径根据你的项目结构调整
      },
      sass: {
        additionalData: `@import "@s/common.scss";` // 路径根据你的项目结构调整
      }
    }
  },
})
