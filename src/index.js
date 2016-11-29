import './index.css';

import { getUsers } from './api/users-api';

getUsers().then(result => {
	let userBody = "";

	result.forEach((user) => {
		const { id, firstName, lastName, email } = user;
		userBody += `<tr>
		<td><a href="#${id}" data-id=${id} className="deleUser">Delete</a></td>
			<td>${id}</td>
			<td>${firstName}</td>
			<td>${lastName}</td>
			<td>${email}</td>
		</tr>`
	});
	global.document.getElementById('users').innerHTML = userBody;
})
