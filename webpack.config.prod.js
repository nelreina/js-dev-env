import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	debug: true,
	devtool: 'cheap-source-map',
	noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		// Create HTML file dynamicly
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
				minifyCSS: true,
				minifyJS: true,
				minifyURLs: true
			}
		}),
		// Eliminate duplicate packages
		new webpack.optimize.DedupePlugin(),
		// Minify JS
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
			{ test: /\.css$/, exclude: /node_modules/, loaders: ['style', 'css'] },
		]
	}
}
