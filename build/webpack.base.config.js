const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const package = require('../package.json')
module.exports = {
	entry: {
		't-ui': "./src/index.ts"
	},
	//打包前注意修改版本号
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: package.name+".js",
		sourcePrefix: ' '
	},
	amd: {
		toUrlUndefined: true
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json','.ts'],
		alias: {
			'vue': 'vue/dist/vue.esm.js',
			'@':path.join(__dirname, "../src"),
			'constant':path.join(__dirname, "../src/KConstant.js"),
			cesium: "cesium/Source/Cesium.js"
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
				exclude: /node_modules/
			},
			{
				test: /\.sign$/,
				loader:path.resolve(__dirname, '../loaders/KSign-loader'),
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {postcss: [require('autoprefixer')()]}
			},
			{
				test: /\.(css|scss)$/,
				use: [{
					loader : "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			},
			{
				test: /\.(jsx|js)$/,
				use: {
					loader: 'babel-loader',
				},
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|png|gif|mp4|ico)$/,
				loader: 'url-loader?limit=100&name=./assets/img/[hash:8].[name].[ext]'
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg)$/,
				loader: 'url-loader?limit=100&name=./assets/fonts/[name].[ext]'
			}
		],
		unknownContextCritical: false,
	},
	plugins: [
		new htmlPlugin({
			minify: {
				removeAttributeQuotes: true
			},
			filename: 'index.html',
			hash: true,
			template: './index.html'

		}),
		new VueLoaderPlugin(),
		new CopyWebpackPlugin([
			{
				from: path.join(cesiumSource, "assets"),
				to: "assets"
			}
		]),
	]
};