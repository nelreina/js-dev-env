import 'whatwg-fetch';

const onSucess = (response) => response.json();
/* eslint-disable no-console */
const onError = (err) => console.log(err);

const get = (url) => fetch(url).then(onSucess, onError);

export const getUsers = _ => get('users');
