const assert = require('assert');

const Mars = require('./Mars');

const mars = new Mars(1, 1);

mars.addWarning('1,1');

const location1 = mars.getNextLocation('0,0', 'N');
assert.equal(location1, '0,1', 'Location should equal 0,1');

const location2 = mars.getNextLocation('1,1', 'N');
assert.equal(location2, '1,1', 'Location should equal 1,1');

const location3 = mars.getNextLocation('0,1', 'W');
assert.equal(location3, null, 'Location should be null');

console.log('Mars - All tests passed');
