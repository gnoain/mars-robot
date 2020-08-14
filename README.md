# Mars Robots

## Solution Assumptions

 - No external depedencies (apart from Node.js) are used. This makes the tests simpler than they should in a normal project, as well as the "dockerization" of the solution.
 - Robots with invalid input information are filtered out instead of stopping the whole execution
 - Two robots can share a location in the grid
 - It is done without taking any particular performance optimizations in account

---

## Requirements

 - Node.js version `v12.18.2` or above

---

## Running

### With Node

For example
```bash
$ node run.js "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL"
```

### With Docker

```bash
$ docker build -t mars .
```

```bash
$ docker run mars "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL"
```
---

## Testing

```bash
$ node run test.js
```
