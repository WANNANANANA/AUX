const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
    publicPath: './',
    devServer: {
        port: 8888,
        open: true
    },
    configureWebpack: config => {
        const plugins = [];
        plugins.push(
            new CopyWebpackPlugin([
                { from: path.join(__dirname, 'src/assets/js/self-adaption.js'), to: path.join(__dirname, 'dist/self-adaption.js') }
            ])
        )
        if (process.env.NODE_ENV === 'production') {
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(js|css)$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
            // external配置
            config.externals = {
                'vue': 'Vue',
                'vue-router': 'VueRouter'
            }
        }
        config.plugins = [
            ...config.plugins,
            ...plugins
        ]
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugin('html')
                .tap(args => {
                    args[0].cdn = 'prod';
                    return args;
                });
        }
    }
}