'use strict'

class Simulation {
  constructor(width, height, layers, cellWidth, cellHeight, context) {
    this.width = width
    this.height = height
    this.layers = layers
    this.cellWidth = cellWidth
    this.cellHeight = cellHeight
    this.context = context

    this.grid = new Grid(width, height, layers)
    this.gridpainter = new GridPainter(this.grid, cellWidth, cellHeight, context)
    this.executor = new Executor()
  }

  add(occupant) {
    this.grid.add(occupant, occupant.x, occupant.y, occupant.layer)
    this.executor.addExecutable(occupant)
  }

  animateStep() {
    this.executor.execute();
    this.gridpainter.draw();
  }
}
