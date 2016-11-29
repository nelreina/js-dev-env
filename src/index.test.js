import { expect } from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

describe('My First mocha test', () => {
	it('should pass', (done) => {
		expect(true).to.equal(true);
		done();
	});
});

describe('index.html', function () {
	it('should say hello', function (done) {
		 const index = fs.readFileSync('./src/index.html', 'utf-8');
		 jsdom.env(index, (err, window) => {
			 const h1 = window.document.getElementsByTagName('h1')[0];
			 expect(h1.innerHTML).to.equal('Users');
			 done();
			 window.close();
		 })
	});
});
