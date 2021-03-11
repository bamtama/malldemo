
const _config = require('./customConfig')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  outputDir: `dist/${_config.site}/`,
  pages: {
    index: {
      entry: `src/sites/${_config.site}/index.js`,
      template: `src/sites/${_config.site}/index.html`,
      filename: "index.html",
      title: "asite",
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/sites/asite/css/theme.less')
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('@pages', resolve('src/pages'))
    .set('@sites', resolve('src/sites'))
    .set('@router', resolve('src/router'))
    .set('@@', resolve(`src/sites/${_config.site}`))
    .set('static', resolve(`./public`))
  }
}
