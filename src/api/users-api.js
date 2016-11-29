import 'whatwg-fetch';
import chalk from 'chalk';

import { getBaseUrl } from './base-url';
const onSucess = (response) => response.json();

/* eslint-disable no-console */
const onError = (err) => console.log(err);

const baseUrl = getBaseUrl();
console.log(chalk.yellow(baseUrl));
const get = (url) => fetch(baseUrl + url).then(onSucess, onError);

export const getUsers = _ => get('users');
