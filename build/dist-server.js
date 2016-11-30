import express from 'express';
import open from 'open';
import path from 'path';
import compression from 'compression';

const port = 8080;
const app = express();

const users = [
	{ id: 1, firstName: 'Bob', lastName: 'Smith',  email: 'bob@gmail.com'},
	{ id: 2, firstName: 'Tammy', lastName: 'Norton',  email: 'tnorton@gmail.com'},
	{ id: 3, firstName: 'Tina', lastName: 'Lee',  email: 'lee.tina@gmail.com'},
	{ id: 4, firstName: 'Sarah', lastName: 'Taylor',  email: 'sarah@gmail.com'},
]

/* eslint-disable no-console */
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
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
