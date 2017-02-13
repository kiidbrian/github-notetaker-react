const webpack = require('webpack');
const path =  require('path');
const webpackDevServer = require('webpack-dev-server');

const config = {
    devtool: "cheap-eval-source-map",
    entry: {
        app: ['./app/App.js', 'webpack-dev-server/client?http://localhost:3330/']
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'public/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }
}

module.exports = config;

const compiler = webpack(config);
const server = new webpackDevServer(compiler, {hot: true});
server.listen(3330);