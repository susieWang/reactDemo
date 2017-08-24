var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//['webpack/hot/dev-server',path.resolve(__dirname, './app/main.js')]
module.exports = {
	entry: {
		main : './app/main.js'
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.less/,
			loader: 'style-loader!css-loader!less-loader'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			//处理后目标位置
			filename: path.join(__dirname, 'build/index.html'),
			//模板位置
			template: './index.html',
			//是否插入
			inject: 'body',
			chunks: ['main']
		})
	]
};