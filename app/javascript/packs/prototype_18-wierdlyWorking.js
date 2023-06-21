import p5 from 'p5'
import { sample } from '../prototypes/utilities'

const cells = 10
const canvasSize = 600
const cellSize = canvasSize / cells
// const types = ['none', 'left-to-right', 'right-to-left', 'cross']
const types = ['left-to-right', 'right-to-left', 'cross']

function drawLine(p, xMin, yMin, xMax, yMax) {
    const type = sample(types)

    switch (type) {
      case 'left-to-right':
        p.line(xMin, yMin, xMax, yMax)
        break
      case 'right-to-left':
        p.line(xMax, yMin, xMin, yMax)
        break
      case 'cross':
        p.line(xMin, yMin, xMax, yMax)
        p.line(xMax, yMin, xMin, yMax)
        break

      default:
        break
    }
}

function sketch(p) {

  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_18')

    p.background(38)
    p.stroke(121, 255, 57)

    for (let row = 0; row < cells; row++) {
      for (let column = 0; column < cells; column++) {
        drawLine(p, column * cellSize, (column + 1) * cellSize, row * cellSize, (row + 1) * cellSize)
      }
    }
  }

  // p.draw = () => {}
}

document.addEventListener('DOMContentLoaded', () =>{
  new p5(sketch)
})