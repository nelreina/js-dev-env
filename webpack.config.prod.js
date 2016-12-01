import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMD5Hash from 'webpack-md5-hash';

export default {
	debug: true,
	devtool: 'cheap-source-map',
	noInfo: false,
	entry:{
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index')
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		// Hash the files using MD5 so that their names change when the content changes
		new WebpackMD5Hash(),
		// Codespliting configuartion
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
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
