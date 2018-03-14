const path = require('path')

module.exports = {
    entry: './src/index.vue',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: "vue-lockscreen",
        libraryTarget: 'umd'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.vue$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: "vue-loader"
            }
        ]
    }
}