/* eslint-disable no-console */
import webpack from 'webpack';
import chalk from 'chalk';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Start building project...'));

webpack(webpackConfig).run((err, stats) => {
	if (err) {
		console.log(chalk.red(err));
		return 1;
	}
	const jsonStats = stats.toJson();

	if (jsonStats.hasErrors) {
		console.log(chalk.red('Webpack generates the following Errors'));
		return jsonStats.errors.map (e => console.log(chalk.red(e)));
	}

	if (jsonStats.hasWarnings) {
		console.log(chalk.yellow('Webpack generates the following Warnings'));
		return jsonStats.warnings.map (w => console.log(chalk.yellow(w)));
	}

	console.log(`Webpack stats: ${stats}`);

	console.log(chalk.green('Build for Production Succesfully ended and place in ./dist!'));
	return 0;
});
