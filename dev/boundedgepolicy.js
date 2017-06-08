'use strict'

class BoundEdgePolicy {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  factorX(x) {
    if (x < 0) {
      x = 0
    }
    if (x > this.width-1) {
      x = this.width-1
    }
    return x;
  }

  factorY(y) {
    if (y < 0) {
      y = 0
    }
    if (y > this.height-1) {
      y = this.height-1
    }
    return y;
  }

}
