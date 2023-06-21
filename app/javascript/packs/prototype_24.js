import p5 from 'p5'
import { getRandomArbitrary } from '../prototypes/utilities'

let x = 0
let y = 0

function sketch(p) {

  p.setup = () => {
    const canvas = p.createCanvas(700, 410)
    canvas.parent('prototype_24')
    p.frameRate(5)
    p.background(0)
  }

  p.draw = () => {
    x = getRandomArbitrary(0, 650)
    y = getRandomArbitrary(0, 350)
    
    p.fill(255)
    p.rect(x, y, 50, 50)

    x++
    y++
  }
}

document.addEventListener('DOMContentLoaded', () =>{
  new p5(sketch)
})