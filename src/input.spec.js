const parseInput = require('./input');
const assert = require('assert');

// All good
const result1 = parseInput(
  '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLF\n0 3 W\nLLFFFLFLFL'
);
assert.deepEqual(result1[0], { maxWidth: 5, maxHeight: 3 });
assert.deepEqual(result1[1], [
  {
    location: '1,1',
    orientation: 'E',
    instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
  },
  {
    location: '3,2',
    orientation: 'N',
    instructions: ['F', 'R', 'R', 'F', 'L', 'L', 'F'],
  },
  {
    location: '0,3',
    orientation: 'W',
    instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
  },
]);

// Wrong Mars size
assert.throws(() => parseInput('51 -2\n1 1 E\nR'), {
  message: 'Invalid Input',
});

// Wrong robot filtered out
const result3 = parseInput(
  '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFZ\n0 3 W\nLLFFFLFLFL'
);
assert.deepEqual(result3[0], { maxWidth: 5, maxHeight: 3 });
assert.deepEqual(result3[1], [
  {
    location: '1,1',
    orientation: 'E',
    instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
  },
  {
    location: '0,3',
    orientation: 'W',
    instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
  },
]);

console.log('Input - All tests passed');
