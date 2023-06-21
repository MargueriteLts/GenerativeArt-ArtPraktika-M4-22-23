import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

const cells = 10
const canvasSize = 600
const cellSize = canvasSize / cells

function drawTile(p, xMin, yMin, xMax, yMax) {

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

function drawTiles(p) {
  p.background(0)
  
  for (let row = 0; row < cells; row++) {
    for (let column = 0; column < cells; column++) {

      if (column === 0) {
        p.beginShape()
        p.vertex(column * cellSize, row * cellSize)
      } else if (column === cells - 1) {
        
      }

      drawTile(p, column * cellSize, (column + 1) * cellSize, row * cellSize, (row + 1) * cellSize)
    }
  }
}

function sketch(p) {
  
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_21')
    p.frameRate(12)
    p.stroke(121, 255, 57)
  }

  p.draw = () => {
    drawTiles(p)
  }
}

document.addEventListener('DOMContentLoaded', () =>{
  new p5(sketch)
})