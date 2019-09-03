const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const extractTextWebpack = require("extract-text-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool:"cheap-module-eval-source-map",
    devServer:{
        open:true,
        hot:true,
        hotOnly:true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath:'../dist/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: extractTextWebpack.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            outputPath: "img",//
                            publicPath: "../img",
                            name: '[hash:5].[ext]',
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    // {
                    //     loader:'babel-loader',
                    //     options:{
                    //        
                    //     }
                    // }
                    {
                        loader: 'babel-loader',
                        options: {
                            
                        }
                    }
                ]
            }
            // {
            //     test:/\.js$/,
            //     enforce:'pre',
            //     exclude: /node_modules/,
            //     use:[
            //         {
            //             loader:'jshint-loader',
            //             options:{
            //                 emitErrors:false,
            //                 faileOnHint:false
            //             }
            //         }
            //     ]

            // }
        ]
    },
    plugins: [
        new extractTextWebpack('./css/style.css'),
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

