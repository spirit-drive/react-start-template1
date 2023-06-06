const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './index.tsx',
	context: path.resolve(__dirname, 'src'), // базовая директория
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js', // название выходного файла
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: ["babel-loader"],

			},

		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx"], // позволяет не указывать расширения при импорте
		// alias: {
		// 	Utilities: path.resolve(__dirname, 'src/utilities/'),
		// 	Templates: path.resolve(__dirname, 'src/templates/'),
		//   }, ----  позволит вместо 'import Utility from '../../utilities/utility';' 
		//            использовать 'import Utility from 'Utilities / utility';'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html', // шаблон
			filename: 'index.html', // название выходного файла
		}),
	],
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}