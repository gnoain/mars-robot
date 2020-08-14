const assert = require('assert');

const { runMission } = require('./Houston');

// Lost and scents
const result1 = runMission(
  '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'
);
assert.equal(result1, '1 1 E\n3 3 N LOST\n2 3 S');

// Wrong Mars size
assert.throws(() => runMission('500 8\n1 1 E\nR'), {
  message: 'Invalid Input',
});

// Filtered out robots
const result2 = runMission('5 3\n1 1 E\nRFRFRFRF\n3 2 N\nZ\n0 3 W\nLLFFFLFLFL');
assert.equal(result2, '1 1 E\n3 3 N LOST');

console.log('E2E - All tests passed');
