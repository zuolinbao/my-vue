const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@s/main.scss";`
      },
      sass: {
        additionalData: `@import "@s/main.scss";` 
      },
      less: {
        additionalData: `@import "@s/main.less";`
      }
    }
  },
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

})
