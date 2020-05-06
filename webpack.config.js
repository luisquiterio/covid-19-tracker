const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react',
						{ plugins: ['@babel/plugin-proposal-class-properties'] },
					],
				},
			},
			{
				test: /\.js$/,
				use: ['source-map-loader'],
				enforce: 'pre',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 3001,
		publicPath: 'http://localhost:3001/dist/',
		hotOnly: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};
