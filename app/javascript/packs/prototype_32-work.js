//9id9JKedTSwlFK8t9QMpmQ
//mx-4WliL2XToGwUfMqVpdg_fKeKj9qN2SdLCoCLe7YZeFhCWm8GGcFaEx6snnj2JlAfnNUbEyyCrEDm0L43aGg

import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'
import map from '../../assets/images/map.jpg'
import txt from '../../assets/images/txt.png'

const canvasSize = {
  width: 0,
  height: 0
}

let mapImg
let txtImg

let canvas

function getGeo() {
  // const status = document.querySelector('.status')

  const success = (pos) => {
    const crd = pos.coords;
    console.log(`LAT: ${crd.latitude}`);
    console.log(`LONG: ${crd.longitude}`);
    // console.log(position)
    // const lat = position.coords.latitude
    // const lon = position.coords.longitude

    // const platform = new H.service.Platform({
    //   'apikey': '9id9JKedTSwlFK8t9QMpmQ'
    // });

    // // Obtain the default map types from the platform object:
    // const defaultLayers = platform.createDefaultLayers();

    // // Instantiate (and display) a map object:
    // const map = new H.Map(
    //   document.getElementById('mapContainer'),
    //   defaultLayers.vector.normal.map,
    //   {
    //     zoom: 10,
    //     center: { lat: lat, lng: lon }
    //   }
    // );
    // document.body.appendChild(map)
  }

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error);
}

////////////////////////

function sketch(p) {

  p.preload = () => {
    mapImg = p.loadImage(map);
    txtImg = p.loadImage(txt);
  }

  p.setup = () => {
    canvas = p.createCanvas(canvasSize.width, canvasSize.height)
    canvas.parent('prototype_32')
    // let nb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // let fr = sample(nb)
    p.frameRate(0.5);
    // p.noLoop()
    mapImg.resize(canvasSize.width, 0)
    txtImg.resize(canvasSize.width, canvasSize.height)
  }

  p.draw = () => {
    // p.noStroke();
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
        
        // let c2 = mapImg.get(row,col);
        // p.stroke(p.color(c2));
        // p.strokeWeight(100);
        // let xp = col + col/2;
        // let yp = row + row/2;
        // p.point(xp, yp);
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

    // p.fill(clr);
    
    // p.filter(imgFilter, 5);
    // p.print(imgFilter)

    // p.tint(r, g, b)
    // p.print(r, g, b)

    p.image(txtImg, 0, 0);

  }
}

function changeHue() {
  let numbers = ['1', '2', '3', '4', '5']
  let numb = sample(numbers)
  
  const colorChange = document.getElementById('defaultCanvas0')
  let classHueChange = 'hue'+numb

  colorChange.classList.add(classHueChange)
}

function refreshPage(){
    window.location.reload();
} 

function menu() {
  const geoButton = document.createElement('div')
  geoButton.id = 'button'
  document.getElementById('prototype_32').appendChild(geoButton)
  geoButton.innerText = 'ПОКАЗАТЬ ЛОКАЛИЗАЦИЯ'
  document.getElementById('button').addEventListener('click', getGeo)

  const musicInput = document.createElement('div')
  musicInput.id = 'music'
  document.getElementById('prototype_32').appendChild(musicInput)
  musicInput.innerText = 'ЗАГРУЗИТЬ ТРЕК'
  document.getElementById('music').addEventListener('click', refreshPage)
}


document.addEventListener('DOMContentLoaded', () =>{
  // geoButton()
  setTimeout(menu, 150)
  canvasSize.height = window.innerHeight
  canvasSize.width = window.innerWidth
  new p5(sketch)
  // !!!!!! Quand j'essaye d'appeler l'element canvas dans ma fonction changeHue enfait il n'existe pas encore, car il faut attendre le DOM, ducoup on rajoute un timeout, mais c'est un peu de la triche pcq ducoup c comme si il y avait un lag...
  setTimeout(changeHue, 100)
})