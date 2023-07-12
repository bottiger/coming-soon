const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  VUE_APP_BASE_URL: '"https://elonmeter.com/"',
  css: {
    extract: false
  }
};
