const path = require('path')

module.exports = {
    mode: 'development', //production or development
    entry: path.resolve(__dirname, 'src' , 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    }
}