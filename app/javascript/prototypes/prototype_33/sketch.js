import p5 from 'p5'
import { sample, getRandomArbitrary } from '../utilities'
import map from '../../../assets/images/map.jpg'
import txt from '../../../assets/images/txt.png'

// let canvasContainerId = ''

let canvasSize = {
  width: 0,
  height: 0
}

// canvasSize.width = window.innerHeight
// canvasSize.height = window.innerWidth

let mapImg
let txtImg

let canvas

function sketch(p) {

  p.preload = () => {
    mapImg = p.loadImage(map);
    txtImg = p.loadImage(txt);
  }

  p.setup = () => {
    canvas = p.createCanvas(canvasSize.width, canvasSize.height)
    canvas.parent('prototype_33')
    // let nb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // let fr = sample(nb)
    // p.frameRate(0.5);
    p.noLoop()
    mapImg.resize(canvasSize.width, 0)
    txtImg.resize(canvasSize.width, canvasSize.height)
  }

  p.draw = () => {

    p.image(mapImg, 0, 0);

    let s = p.int(getRandomArbitrary(0, 300))
    p.print(s)

    for (let y=0; y<mapImg.height; y+=s) {
      let stripYPosition = p.int(p.random(0, mapImg.height-s));
      let strip = mapImg.get(0,stripYPosition, mapImg.width, 100);
      p.image(strip, 0, y);
    }
    
    let rd = p.int(getRandomArbitrary(100, 500))
    p.print(rd)
    let rw = p.int(getRandomArbitrary(1, 100))
    let rh = p.int(getRandomArbitrary(100, 300))
    p.print(rw)
    p.print(rh)

    let r = p.int(getRandomArbitrary(1, 255))
    let g = p.int(getRandomArbitrary(1, 255))
    let b = p.int(getRandomArbitrary(1, 255))
    p.print(r, g, b)

    p.print(mapImg.width, mapImg.height)

    for(let col = 0; col< mapImg.width; col+=rd){
      for(let row = 0; row < mapImg.height; row+=rd){
        let c = mapImg.get(col,row);
        p.fill(p.color(c));
        p.rect(col,row,rw,rh);
      }
    }

    for(let col = 0; col< mapImg.width; col+=rd){
      for(let row = 0; row < mapImg.height; row+=rd){
        let c = mapImg.get(col,row);
        p.stroke(p.color(c));
        p.strokeWeight(p.int(getRandomArbitrary(1, 100)));
        let xp = col + col/2;
        let yp = row + row/2;
        p.point(xp, yp);
      }
    }

    p.image(txtImg, 0, 0);

  }
}

function initSketch() {
  canvasSize.height = window.innerHeight
  canvasSize.width = window.innerWidth
  new p5(sketch)
}



export { initSketch }