import 'whatwg-fetch';
import chalk from 'chalk';

import { getBaseUrl } from './base-url';
const onSucess = (response) => response.json();

/* eslint-disable no-console */
const onError = (err) => console.log(err);

const baseUrl = getBaseUrl();

const get = (url) => fetch(baseUrl + url).then(onSucess, onError);
const del = (url) => fetch(baseUrl + url, { method: 'DELETE' }).then(onSucess, onError);

export const getUsers = _ => get('users');
export const delUser = id => del(`users/${id}`);
