var path = require('path');
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HTMLWebpackPluginConfig =   new HTMLWebpackPlugin(
    {
        template: './app/index.html',
        filename: 'index.html',
        inject: 'body'
    }
);
/* exports */
module.exports = {
    entry :  './app/index.js',
    mode: 'development',
    output:{
      filename: 'index.bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname , './dist')
      },
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            exclude : /node_modules/,
            loader: 'babel-loader',
            options: {presets:["@babel/preset-env","@babel/preset-react"]}
        },
        {
            test: /\.(scss|sass|css)$/i,
            exclude : /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
        },
        // intercept svg and use svgr to convert them to React Components
        {
            test: /\.svg/,
            //use: ["@svgr/webpack","svgo-loader"],
            use: ["svg-url-loader"],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(jpe?g|gif|png)$/i,
            use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }
          ]
        }          
        ] 
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
   
    devServer: {
        port: 3000
      },
    plugins:[
        new webpack.HotModuleReplacementPlugin() ,HTMLWebpackPluginConfig,
        new MiniCssExtractPlugin({
            filename: '[name].css' ,
            chunkFilename: '[id].css',
          })
    ]
};