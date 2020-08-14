const assert = require('assert');

const Robot = require('./Robot');

const robot = new Robot('0,0', 'N');

const location = robot.reportLocation();
assert.equal(location, '0,0', 'Location should equal 0,0');

const orientation = robot.reportOrientation();
assert.equal(orientation, 'N', 'Orientation should equal N');

robot.lose();
assert.equal(robot.isLost, true, 'Robot should be lost');

const isWorking = robot.isWorking();
assert.equal(isWorking, false, 'Robot should not be working');

robot.goTo('0,1');
assert.equal(robot.location, '0,1', 'Robot location should be 0,1');

robot.turn('L');
assert.equal(robot.orientation, 'W', 'Robot should be looking west');

const report = robot.reportToHouston();
assert.equal(report, '0 1 W LOST', 'Robot should report 0 1 W LOST');

console.log('Robot - All tests passed');
