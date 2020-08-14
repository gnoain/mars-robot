const parseInput = require('./input');
const Mars = require('./Mars');
const Robot = require('./Robot');

module.exports = { runMission };

function runMission(input) {
  const [marsInfo, robotsInfo] = parseInput(input);
  const mars = new Mars(marsInfo.maxWidth, marsInfo.maxHeight);
  const robots = robotsInfo.map(({ location, orientation, instructions }) => {
    return { robot: new Robot(location, orientation), instructions };
  });

  const instructionsMap = {
    F: function moveForward(robot) {
      const location = robot.reportLocation();
      const orientation = robot.reportOrientation();
      const destination = mars.getNextLocation(location, orientation);

      // No destination means the robot was lost
      if (!destination) {
        mars.addWarning(location);
        robot.lose();
      } else {
        robot.goTo(destination);
      }
    },
    L: function moveLeft(robot) {
      robot.turn('L');
    },
    R: function moveRight(robot) {
      robot.turn('R');
    },
  };

  return robots
    .map(({ robot, instructions }) => {
      let index = 0;
      let keepGoing = true;

      // Keeps going until robot is lost or there are no more instructions pending
      while (keepGoing) {
        const instructionCode = instructions[index];
        const instruction = instructionsMap[instructionCode];
        instruction(robot);
        index++;
        keepGoing = robot.isWorking() && index < instructions.length;
      }
      return robot.reportToHouston();
    })
    .join('\n');
}
