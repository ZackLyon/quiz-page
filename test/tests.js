// import './example.test.js';
import { countsAsAYes } from '../utils.js';


const test = QUnit.test;
test('should take in any string and return true if it is starting with non-case-sensitve letter y, otherwise false', (expect) => { 
const expected = true;
const actual = countsAsAYes('Yaaaaas');
expect.equal(actual,expected, 'result for Yaaaaas');
});

const test2 = QUnit.test;
test2('should take in any string and return true if it is starting with non-case-sensitve letter y, otherwise false', (expect) => { 
const expected = false;
const actual = countsAsAYes('Nah');
expect.equal(actual, expected, 'result for Nah');
});