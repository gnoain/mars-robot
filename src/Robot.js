module.exports = Robot;

// Helper to calculate the orientation depending on the turn type
const orientationMap = {
  N: { L: 'W', R: 'E' },
  S: { L: 'E', R: 'W' },
  E: { L: 'N', R: 'S' },
  W: { L: 'S', R: 'N' },
};

function Robot(location, orientation) {
  this.location = location;
  this.orientation = orientation;
  this.isLost = false;
}

Robot.prototype.reportLocation = function () {
  return this.location;
};

Robot.prototype.reportOrientation = function () {
  return this.orientation;
};

Robot.prototype.lose = function () {
  this.isLost = true;
};

Robot.prototype.isWorking = function () {
  return !this.isLost;
};

Robot.prototype.goTo = function (location) {
  this.location = location;
};

Robot.prototype.turn = function (direction) {
  this.orientation = orientationMap[this.orientation][direction];
};

Robot.prototype.reportToHouston = function () {
  return `${this.location.split(',').join(' ')} ${this.orientation} ${
    this.isLost ? 'LOST' : ''
  }`.trim();
};
