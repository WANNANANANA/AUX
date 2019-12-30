const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    outputDir: 'dist',
    publicPath: 'http://www.huizhangongsi.com/auxPro/',
    devServer: {
        port: 8888,
        open: true
    },
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                { from: path.join(__dirname, 'src/wx_api'), to: path.join(__dirname, 'dist/wx_api') },
                { from: path.join(__dirname, 'src/.idea'), to: path.join(__dirname, 'dist/.idea') },
                { from: path.join(__dirname, 'src/assets/js/self-adaption.js'), to: path.join(__dirname, 'dist/self-adaption.js') }
            ])
        ]
    }
}