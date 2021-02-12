const { resolve } = require('path');

const ENV = (process.env.ENV = process.env.NODE_ENV = 'development');

module.exports = env => {
    const config = {
        context: resolve("lib"),
        entry: ["./index.ts"],
        output: {
            filename: "bundle.js",
            path: resolve("dist"),
            publicPath: "/dist/",
        },
        mode: ENV,
        devtool: "source-map",//, "eval"),
        resolve: {

            /*
            * An array of extensions that should be used to resolve modules.
            * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
            */
            extensions: ['.ts', '.tsx', '.js', '.json'],

            // An array of directory names to be resolved to the current directory
            modules: [resolve("lib"), 'node_modules'],

        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    loaders: [
                        'awesome-typescript-loader'
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    loader: "source-map-loader" 
                },
            ],

        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
    };
  if (env.debug) {
    console.log(config);
    debugger;
  }

  return config;
}
