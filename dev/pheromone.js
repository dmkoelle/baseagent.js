'use strict'

class Pheromone extends Occupant {
  constructor(grid, layer, x, y, initialIntensity, dissipationRate, flavor) {
    super(grid, layer, x, y)
    this.initialIntensity = initialIntensity
    this.currentIntensity = initialIntensity
    this.dissipationRate = dissipationRate
    this.flavor = flavor
    this.step = 0
  }

  execute() {
    // Update pheromone values
    this.step++
    this.currentIntensity--

    // Remove itself from all cells
    this.grid.removeAll(this, this.layer)

    if (this.currentIntensity > 0) {
      // Recalculate the dispersion
      var radius = this.dissipationRate * this.step

      // Add itself to all cells
      for (var rx = this.x - radius; rx < this.x + radius; rx++) {
        for (var ry = this.y - radius; ry < this.y + radius; ry++) {
          this.grid.add(this, rx, ry, this.layer)
        }
      }
    }
  }

  draw(context, x, y, width, height) {
    context.beginPath();
    context.rect(x * width, y * height, width, height)
    context.fillStyle = "rgba(200, 200, 0, "+this.currentIntensity / this.initialIntensity+")"
    context.fill();
    context.lineWidth = 0.5;
    context.strokeStyle = 'red';
    context.stroke();
  }
}
