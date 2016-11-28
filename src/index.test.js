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
			 const p = window.document.getElementsByTagName('p')[0];
			 expect(p.innerHTML).to.equal('Hello World');
			 done();
			 window.close();
		 })
	});
});
