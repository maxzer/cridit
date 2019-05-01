const path = require('path')
module.exports = {
    entry: './src/idex.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')

    }
}