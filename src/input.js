module.exports = parseInput;

function parseInput(input) {
  const lines = input.split('\\n');

  // Take out first line and match it against the Mars regex
  const marsMatch = lines.shift().match(
    // Matches two numbers beten 0 and 50 separated by space
    /^(?<maxWidth>[0-9]|[1-4][0-9]|50) (?<maxHeight>[1-9]|[1-4][0-9]|50)$/
  );

  if (marsMatch) {
    const mars = {
      maxWidth: parseInt(marsMatch.groups.maxWidth, 10),
      maxHeight: parseInt(marsMatch.groups.maxHeight, 10),
    };
    const robots = lines
      .join(' ')
      // This regex groups back the lines of each robot
      .match(/\d+\s\d+\s\w\s\w+/g)
      .map((match) =>
        match.match(
          // x: number between 0 and 50
          // y: number between 0 and 50
          // orientation: single capital leter N,S,E or W
          // instructions: matches between 1 and 100 series of R,L or F
          /^(?<x>[0-9]|[1-4][0-9]|50) (?<y>[1-9]|[1-4][0-9]|50) (?<orientation>[NSEW]) (?<instructions>[RLF]{1,100})$/
        )
      )
      // Filter out robots with invalid input format
      .filter((match) => match)
      .map((match) => {
        const { x, y, orientation, instructions } = match.groups;
        // Filter out robots that are placed outside Mars grid
        if (x <= mars.maxWidth && y <= mars.maxHeight) {
          return {
            location: `${x},${y}`,
            orientation,
            instructions: instructions.split(''),
          };
        }
      })
      .filter((robot) => robot);
    return [mars, robots];
  } else {
    throw new Error('Invalid Input');
  }
}
