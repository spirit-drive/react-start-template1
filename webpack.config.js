const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './index.tsx',
	context: path.resolve(__dirname, 'src'),
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
			// `js` and `jsx` files are parsed using `babel`
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(js|ts)x?$/,
				loader: require.resolve("babel-loader"),
				exclude: /node_modules/,
			},

		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html', // шаблон
			filename: 'index.html', // название выходного файла
		}),
	],
}