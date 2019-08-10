const path = require('path');
const webpack = require("webpack");
const CopyWebPack = require('copy-webpack-plugin');
const package = require(path.resolve(__dirname, "package.json"));

require('dotenv').config({
    path: "../../environment/" + process.env.ENV,
	debug: process.env.ENV === "debug"
});

if (process.env.ENV != "debug" && process.env.ENV != "production" && process.env.ENV != "sandbox") {
    console.error('ENV= should be one of [debug,sandbox,production]');
    process.exit(0)
}
const ProjectDIR = path.resolve(__dirname) + "/";
    const SourceDIR = ProjectDIR + "src/";
    const BuildDIR = ProjectDIR + "../../dist/public";

    const config = {

        mode: process.env.ENV === "production" ? "production" : "development",

        entry: {
            [process.env.MODULE_NAME + ".mod"]: SourceDIR + process.env.MODULE_NAME + ".mod.tsx",
        },

        externals: {},

        output: {
            path: path.resolve(BuildDIR),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: [
                        path.resolve(SourceDIR),
                    ],
                    loader: "awesome-typescript-loader",
                },
                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ],
        },
        resolve: {
            modules: ["node_modules",],
            alias: { "src": SourceDIR },
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs', '.gql']
        },

        target: "web", // enum
        context: __dirname, // string (absolute path!)
        performance: {
            hints: "warning", // enum
            maxAssetSize: 500000, // int (in bytes),
            maxEntrypointSize: 500000, // int (in bytes)
        },
        stats: "errors-only",
    };

    if (process.env.REACT_EXTERNAL === "true") {
        config.externals.react = 'React';
    }

    const plugins = [
        //moment optimizations
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),

        new webpack.DefinePlugin({
            '$_PRODUCTION_$': (process.env.ENV === "production") ? true : false,
            '$_SANDBOX_$': (process.env.ENV === "sandbox") ? true : false,
            "$_API_DOMAIN_$": JSON.stringify(process.env.APP_HOST),
            "$_API_SOCKET_$": JSON.stringify(process.env.APP_WS_HOST),
            "$_APP_NAME_$": JSON.stringify(package.name),
            "$_APP_VERSION_$": JSON.stringify(package.version),
            "$_APP_DESCRIPTION_$": JSON.stringify(package.description),
        })
    ];

    /**
     * Настройки для дебага
     */
    if (process.env.ENV === "debug") {
        config.devtool = "source-map";
        config.performance.maxAssetSize = 500000000;
        config.performance.maxEntrypointSize = 500000000;
        config.devServer = {
            host: '0.0.0.0',
            contentBase: path.resolve(BuildDIR, process.env.ENV),
            // progress: true,
            // watch: true,
            hot: true,
            inline: true,
            historyApiFallback: true,
        }
        plugins.push(new webpack.NamedModulesPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    } else {
        config.devtool = false;
    }


    /**
     * Копируем файлы
     */
    plugins.push(new CopyWebPack([
        { from: ProjectDIR + 'public/assets', to: BuildDIR + '/assets' },
        { from: ProjectDIR + 'public/index.html' },
    ]));

    config.plugins = plugins;

    module.exports = config;