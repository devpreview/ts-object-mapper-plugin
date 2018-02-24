const path = require('path');
const _root = path.resolve(__dirname, '.');

/**
 * Helpers
 */
const helpers = {
    root: function (args) {
        args = Array.prototype.slice.call(arguments, 0);
        return path.join.apply(path, [_root].concat(args));
    }
};

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = (options) => {
    return {
        /**
         * These options change how modules are resolved.
         *
         * See: https://webpack.js.org/configuration/resolve/
         */
        resolve: {
            /**
             * Automatically resolve certain extensions.
             *
             * See: https://webpack.js.org/configuration/resolve/#resolve-extensions
             */
            extensions: ['.ts']
        },

        /**
         * Instructs webpack to target a specific environment.
         *
         * See: https://webpack.js.org/concepts/targets/
         */
        target: 'web',

        /*
         * The entry point for the bundle
         *
         * See: https://webpack.js.org/configuration/entry-context/#entry
         */
        entry: {
            'test.spec': helpers.root('src/test', 'main.spec.ts')
        },

        /**
         * Options affecting the output of the compilation.
         *
         * See: https://webpack.js.org/concepts/output/
         * See: https://webpack.js.org/configuration/output/
         */
        output: {
            /**
             * The output directory as an absolute path.
             *
             * See: https://webpack.js.org/configuration/output/#output-path
             */
            path: helpers.root('dist/test'),

            /**
             * Specifies the name of each output file on disk.
             * IMPORTANT: You must not specify an absolute path here!
             *
             * See: http://webpack.github.io/docs/configuration.html#output-filename
             */
            filename: '[name].js'
        },

        /**
         * Configuration regarding modules.
         *
         * See: https://webpack.js.org/configuration/module/
         */
        module: {
            /**
             * Rules for modules (configure loaders, parser options, etc.)
             *
             * See: https://webpack.js.org/configuration/module/#module-rules
             */
            rules: [
                /**
                 * TypeScript loader for webpack
                 *
                 * See: https://github.com/TypeStrong/ts-loader
                 */
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: helpers.root('tsconfig.json'),
                        context: helpers.root('src/test'),
                        compilerOptions: {}
                    }
                }
            ]
        },

        /**
         * Add additional plugins to the compiler.
         *
         * See: http://webpack.github.io/docs/configuration.html#plugins
         */
        plugins: [],

        /**
         * Developer tool to enhance debugging
         *
         * See: http://webpack.github.io/docs/configuration.html#devtool
         * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
         */
        devtool: 'source-map',

        /**
         * Include polyfills or mocks for various node stuff
         * Description: Node configuration
         *
         * See: https://webpack.js.org/configuration/node/
         */
        "node": {
            "fs": "empty",
            "global": true,
            "crypto": "empty",
            "tls": "empty",
            "net": "empty",
            "process": true,
            "module": false,
            "clearImmediate": false,
            "setImmediate": false
        }
    }
};