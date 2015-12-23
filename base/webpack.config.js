var path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.resolve('app'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: /app/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        contentBase: './app',
        port: 9000,
        noInfo: true
    }
}
