import './index.css';

import { getUsers, delUser } from './api/users-api';

getUsers().then(result => {
	let userBody = "";

	result.forEach((user, idx) => {
		const { id, firstName, lastName, email } = user;
		userBody += `<tr>
		<td><a href="#${id}" data-id=${id} class="deleteUser">Delete</a></td>
			<td>${idx + 1}</td>
			<td>${id}</td>
			<td>${firstName}</td>
			<td>${lastName}</td>
			<td><a href="">${email}</a></td>
		</tr>`
	});
	global.document.getElementById('users').innerHTML = userBody;

	const deleteLinks = global.document.getElementsByClassName('deleteUser');
	console.log(deleteLinks.length);
	Array.from(deleteLinks, link => {
		link.onclick = function(event) {
			event.preventDefault();
			const element = event.target;
			const id = element.attributes['data-id'].value;
			delUser(id);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		}
	})

})
