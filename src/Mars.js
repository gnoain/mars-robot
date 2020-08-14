module.exports = Mars;

function Mars(maxWidth, maxHeight) {
  this.map = {};

  for (let x = 0; x <= maxWidth; x++) {
    for (let y = 0; y <= maxHeight; y++) {
      this.map[`${x},${y}`] = {
        location: `${x},${y}`,
        paths: {
          N: y + 1 <= maxHeight ? `${x},${y + 1}` : null,
          S: y - 1 >= 0 ? `${x},${y - 1}` : null,
          E: x + 1 <= maxWidth ? `${x + 1},${y}` : null,
          W: x - 1 >= 0 ? `${x - 1},${y}` : null,
        },
        hasWarning: false,
      };
    }
  }
}

Mars.prototype.getNextLocation = function (location, orientation) {
  const gridPoint = this.map[location];
  const nextLocation = gridPoint.paths[orientation];
  // No nextLocation means it is outside the limits of the grid
  if (!nextLocation) {
    return gridPoint.hasWarning ? location : null;
  } else {
    return nextLocation;
  }
};

Mars.prototype.addWarning = function (location) {
  this.map[location].hasWarning = true;
};
