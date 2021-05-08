/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.externals = {'config': JSON.stringify({
        apiUrl: 'http://localhost:8080',
        imgUrl: 'http://202.120.40.106:9090'
    })};
    return config;
};