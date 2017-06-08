'use strict'

class Executor {
  constructor() {
      this.executableList = []
  }

  addExecutable(executable) {
      this.executableList.push(executable)
  }

  removeExecutable(executable) {
    var index = this.executableList.indexOf(executable)
    if (index > -1) {
      this.executableList.splice(index, 1);
    }
  }

  execute() {
    for (var i=0; i < this.executableList.length; i++) {
      this.executableList[i].execute()
    }
  }
}
