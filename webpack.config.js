var path = require('path');

module.exports = {
    //mode: "development",
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
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