const path = require('path')
module.exports = {
    chainWebpack: config => {
        // config.resolve.alias.set(pathName,绝对路径)
        config.resolve.alias
            .set('components', path.resolve(__dirname, './src/components'))
            .set('parge', path.resolve(__dirname, './src/parge'))
            .set('styles', path.resolve(__dirname, './src/assets/styles'))
            .set('utils', path.resolve(__dirname, './src/utils'))
            .set('assets', path.resolve(__dirname, './src/assets'))
    }
}