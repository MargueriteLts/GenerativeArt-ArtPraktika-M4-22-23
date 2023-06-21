import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'
import map from '../../assets/images/map.jpg'

let mapImg

function sketch(p) {

  p.preload = () => {
    mapImg = p.loadImage(map);
  }

  p.setup = () => {
    const canvas = p.createCanvas(mapImg.width, mapImg.height)
    canvas.parent('prototype_30')
    // let nb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // let fr = sample(nb)
    // p.frameRate(0.5);
    p.noLoop()
  }

  p.draw = () => {
    p.noStroke();
    let filterModes = [
      // p.GRAY,
      // p.OPAQUE,
      p.INVERT,
      p.POSTERIZE,
      // p.BLUR,
      // p.ERODE,
      // p.DILATE,
      // p.THRESHOLD
    ];

    let imgFilter = sample(filterModes)
    // let imgFilter = p.POSTERIZE

    p.image(mapImg, 0, 0);

    
    // for (let y=0; y<mapImg.height; y+=10) {
    //   let stripYPosition = p.int(p.random(0, mapImg.height-10));
    //   let strip = mapImg.get(0,stripYPosition, mapImg.width, 10);
    //   p.image(strip, 0,y);
    // }

    let s = p.int(getRandomArbitrary(0, 300))
    p.print(s)

    for (let y=0; y<mapImg.height; y+=s) {
      let stripYPosition = p.int(p.random(0, mapImg.height-s));
      let strip = mapImg.get(0,stripYPosition, mapImg.width, 100);
      p.image(strip, 0, y);
      // console.log(s)
    }
    
    let rd = p.int(getRandomArbitrary(1, 100))
    p.print(rd)
    let rw = p.int(getRandomArbitrary(1, 100))
    let rh = p.int(getRandomArbitrary(1, 100))
    p.print(rw)
    p.print(rh)

    let r = p.int(getRandomArbitrary(1, 255))
    let g = p.int(getRandomArbitrary(1, 255))
    let b = p.int(getRandomArbitrary(1, 255))
    p.print(r, g, b)

    for(let col = 0; col< mapImg.width; col+=rd){
      for(let row = 0; row < mapImg.height; row+=rd){
        let c = mapImg.get(col,row);
        let c2 = mapImg.get(row,col);
        p.fill(p.color(c));
        p.rect(col,row,rw,rh);

        p.stroke(p.color(c2));
        // let clr = (r, g, b);
        // p.stroke(p.color(clr));
        p.strokeWeight(100);
        let xp = col + col/2;
        let yp = row + row/2;
        p.point(xp, yp);
        // console.log(rd)
      }
    }

    // p.fill(clr);
    
    // p.filter(imgFilter, 5);
    // p.print(imgFilter)

    // p.tint(r, g, b)
    // p.print(r, g, b)


  }

}

document.addEventListener('DOMContentLoaded', () =>{
  new p5(sketch)
})