const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


//   VUE_APP_BASE_URL: '"https://elonmeter.com/"',
module.exports = {
  chainWebpack: config => {
    config.module
        .rule('responsive')
        .test(/\.(jpe?g|png|webp)$/i)
        .use('responsive-loader')
        .loader('responsive-loader')
        .tap(() => {
            return {
                adapter: require('responsive-loader/sharp'),
            }
        })
  },
  css: {
    extract: false
  }
};
