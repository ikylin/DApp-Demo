// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: {
            NODE_ENV: '"production"'
        },
        index: path.resolve(__dirname, '../demo/index.html'),
        assetsRoot: path.resolve(__dirname, '../demo'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/bookMgr',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        cssSourceMap: true,
        jsSourceMap: true,
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 30001,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [ //代理路径

        ],
        proxypath: '',
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: true,
        jsSourceMap: true,
    }
}
