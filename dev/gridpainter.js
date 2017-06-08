'use strict'

class GridPainter {
  constructor(grid, cellWidth, cellHeight, canvasContext) {
    this.grid = grid
    this.cellWidth = cellWidth
    this.cellHeight = cellHeight
    this.canvasContext = canvasContext
  }

  drawCell(x, y) {
    context.beginPath();
    context.rect(x * (this.cellWidth), y * (this.cellHeight), this.cellWidth, this.cellHeight)
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 0.5;
    context.strokeStyle = 'black';
    context.stroke();
  }

  draw() {
    for (var row=0; row < this.grid.width; row++) {
      for (var col=0; col < this.grid.height; col++) {
        this.drawCell(col, row)
        for (var layer=0; layer < this.grid.layers; layer++) {
          var occupants = this.grid.occupantsAt(col, row, layer)
          for (var index=0; index < occupants.length; index++) {
            occupants[index].draw(this.canvasContext, col, row, this.cellWidth, this.cellHeight)
          }
        }
      }
    }
  }
}
