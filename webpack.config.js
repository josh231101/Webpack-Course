//webpack.config.js
const path = require('path') //we require the path core module to help us resolve a directory

//this will hold our configuration object
module.exports = {
    //we first specify an entry script to webpack
    entry: './src/index.js',
    //next is our output file and directory
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}