import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';

import { schema } from './mock-data-schema';

const json = JSON.stringify(jsf(schema), null, 2);
/* eslint-disable no-console */
fs.writeFile('./src/api/db.json', json, err => {
	if (err){ return console.log(chalk.red(err)); }
	console.log(chalk.green('Mock data generated!'));
})
