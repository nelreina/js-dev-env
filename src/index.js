import './index.css';
import numeral from 'numeral';

const value = numeral(10000).format('0,0.00');
console.log(`This value is NAFL ${value}`);
