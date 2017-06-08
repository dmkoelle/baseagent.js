'use strict'

class Occupant {
  constructor(grid, layer, x, y) {
    this.grid = grid
    this.layer = layer
    this.x = x
    this.y = y
  }

  layer() {
    return this.layer
  }

  x() {
    return this.x
  }

  y() {
    return this.y
  }
}
