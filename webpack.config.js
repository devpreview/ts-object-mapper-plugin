const path = require('path');
const _root = path.resolve(__dirname, '.');

/**
 * Helpers
 */
const helpers = {
    root: function (args) {
        args = Array.prototype.slice.call(arguments, 0);
        return path.join.apply(path, [_root].concat(args));
    },

    pluginVersion: require("./package.json").version
};

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = (options) => {
    return {};
};
