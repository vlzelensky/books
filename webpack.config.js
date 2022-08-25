const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const mode = isDev => isDev ? 'development' : 'production'

const fileName = ext => isDev ? `[name].bundle.${ext}` : `[name].[hash].${ext}`

const babelOptions = preset => {
    const options = {
        presets: [
            '@babel/preset-env',
        ]
    }

    if (preset) {
        options.presets.push(preset)
    }
    return options
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: mode(),
    entry: './index.tsx',
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'png'],
        alias: {
            Components: path.resolve('src/Components'),
            pages: path.resolve('src/pages'),
            hooks: path.resolve('src/hooks'),
            assets: path.resolve('src/assets'),
            store: path.resolve('src/store'),
            consts: path.resolve('src/consts'),
            Router: path.resolve('src/Router'),
            utils: path.resolve('src/utils'),
            public: path.resolve('src/public'),

        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "../public/index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: fileName('css'),
        })
    ],
    optimization: {
        minimizer: isProd && [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    devServer: {
        port: 3000,
        hot: isDev
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf| woff| woff2)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions()
                },

            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                },

            },
            {
                test: /\.[j,t]sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions( ["@babel/preset-react", {"runtime": "automatic"}])
                },

            },

        ]
    }
}