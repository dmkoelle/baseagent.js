'use strict'

allOccupantsInCircle(grid, cx, cy, radius) {

}

allOccupantsInSector(grid, cx, cy, radius, startAngle, endAngle) {

}

immediateNeighbors(grid, cx, cy) {
  var neighbors = []
  neighbors.push(grid.getOccupantsAt(cx-1,cy-1));
  neighbors.push(grid.getOccupantsAt(cx,cy-1));
  neighbors.push(grid.getOccupantsAt(cx+1,cy-1));
  neighbors.push(grid.getOccupantsAt(cx-1,cy));
  neighbors.push(grid.getOccupantsAt(cx,cy));
  neighbors.push(grid.getOccupantsAt(cx+1,cy));
  neighbors.push(grid.getOccupantsAt(cx-1,cy+1));
  neighbors.push(grid.getOccupantsAt(cx,cy+1));
  neighbors.push(grid.getOccupantsAt(cx+1,cy+1));
  return neighbors
}

cardinalNeighbors(grid, cx, cy) {
  var neighbors = []
  neighbors.push(grid.getOccupantsAt(cx,cy-1));
  neighbors.push(grid.getOccupantsAt(cx-1,cy));
  neighbors.push(grid.getOccupantsAt(cx,cy));
  neighbors.push(grid.getOccupantsAt(cx+1,cy));
  neighbors.push(grid.getOccupantsAt(cx,cy+1));
  return neighbors;
}
