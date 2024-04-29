/* config-overrides.js TODO ESTO ES PARA QUE FUNCIONE EL JWT EN EL FRONTEND*/
const webpack = require('webpack');
module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        'process': require.resolve('process'),
        "vm": require.resolve("vm-browserify"),

    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );
    

    return config;
}