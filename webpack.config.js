'use strict'

const config = {
    entry: {
        lepus: './src/lepus.jsx',
        lepus_client: './src/lepus_client.jsx'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass?sourceMap'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff&name=[name].[ext]'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff&name=[name].[ext]'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream&name=[name].[ext]'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml&name=[name].[ext]'
        }, {
            test: /\.html$/,
            loader: 'html?sourceMap'
        }, {
            test: /\.json$/,
            loader: 'json?sourceMap'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: process.env.NODE_ENV === 'production' ?
                'strip-loader?strip[]=console.log&strip[]=console.dir&strip[]=console.debug!webpack-unassert-loader!babel?sourceMap' : 'babel?sourceMap'
        }]
    },
    devtool: 'inline-source-map'
}

module.exports = config
