var path = require('path');

module.exports = {
    //mode: "development",
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                /* regular expressions, get only js files ignore js files in node_modules directory*/
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}