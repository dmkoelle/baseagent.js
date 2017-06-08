'use strict'

/**
 * A Grid is a 2-dimensional space withan arbitrary number of layers;
 * each layer may contain an arbitrary number of occupants.
 */
class Grid {

  constructor(width, height, layers) {
    this.edgePolicy = new BoundEdgePolicy(width, height)
    this.width = width
    this.height = height
    this.layers = layers
    this.contents = [];
    for (var l=0; l < layers; l++) {
      this.contents.push([])
      for (var i=0; i < width; i++) {
        this.contents[l].push([])
        for (var u=0; u < height; u++) {
          this.contents[l][i].push([])
        }
      }
    }
  }

  add(occupant, x, y, layer) {
    this.contents[layer][this.edgePolicy.factorX(x)][this.edgePolicy.factorY(y)].push(occupant)
  }

  remove(occupant, x, y, layer) {
    var fx = this.edgePolicy.factorX(x)
    var fy = this.edgePolicy.factorY(y)
    var index = this.contents[layer][fx][fy].indexOf(occupant)
    if (index > -1) {
      this.contents[layer][fx][fy].splice(index, 1)
    }
  }

  /** Remove all instances of this occupant from the given layer */
  removeAll(occupant, layer) {
    for (var x=0; x < this.width; x++) {
      for (var y=0; y < this.height; y++) {
        this.remove(occupant, x, y, layer)
      }
    }
  }

  occupantsAt(x, y, layer) {
    return this.contents[layer][this.edgePolicy.factorX(x)][this.edgePolicy.factorY(y)]
  }
}
