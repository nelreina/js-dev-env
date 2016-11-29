import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';

const port = 8080;
const app = express();
const compiler = webpack(config);

const users = [
	{ id: 1, firstName: 'Bob', lastName: 'Smith',  email: 'bob@gmail.com'},
	{ id: 2, firstName: 'Tammy', lastName: 'Norton',  email: 'tnorton@gmail.com'},
	{ id: 3, firstName: 'Tina', lastName: 'Lee',  email: 'lee.tina@gmail.com'},
	{ id: 4, firstName: 'Sarah', lastName: 'Taylor',  email: 'sarah@gmail.com'},
]

/* eslint-disable no-console */
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
	res.json(users);
});

app.listen(port, err => {
	if (err) {
		console.log(err);
	} else {
		open(`http://localhost:${port}`);
	}
});
