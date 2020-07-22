const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const prodWebpackConfig = merge(baseWebpackConfig,{
	mode: "production",
	plugins: [
		new uglify({
			uglifyOptions:{
				compress: {
					warnings: false,
					drop_debugger: true,//console
					pure_funcs: ['console.log']
				}
			}
		}),
	]
});
module.exports = prodWebpackConfig
