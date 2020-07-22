/**
 * Created by dy on 2018/11/28.
 *
 */
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const devWepackConfig = merge(baseWebpackConfig, {
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, "../dist"),
		host: "localhost",
		inline: true,//实时刷新
		compress: true,
		port: 9090,
	},
	plugins: []
})

module.exports = devWepackConfig;