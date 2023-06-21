import { sample, getRandomArbitrary } from '../prototypes/utilities'

import { model } from '../prototypes/prototype_10/model'

import {
  getLargeCircleStore,
  setLargeCircleStore,
  setBackgroundColorClass
} from '../prototypes/prototype_10/store'

Number.prototype.times = function (cb) {
  var i = -1

  while (++i < this) {
    cb(i)
  }

  return +this
}

let container

// выбрать цвет фона

// указать сторону, размер кругов и цвет

// определить рэнджи для каждого параметра
// и каждой стороны/размера

// сгенерировать CSS

// создать текстовый блок (contenteditable)

// сгенерировать положение текстового блока

// сгенерировать текст (выбрать из массива)

// указать блоку текст и CSS

// выбрать цвет дипфейса

// в CSS сверстать дипфейса

function generateBackground() {
  return new Promise((resolve, reject) => { 
    const background = sample(model.background)
    container.classList.add(background)
    setBackgroundColorClass(background)

    resolve()
   })
}

function generateLargeCircle() {
  return new Promise((resolve, reject) => {
    // const largeCircleStore = getLargeCircleStore()
    const { sides, sizes } = model.largeCircles
    const vSides = Object.keys(sides.vSides)
    const hSides = Object.keys(sides.hSides)
    const sizesKeys = Object.keys(sizes)

    ;(2).times((i) => {
      const vSide = sample(vSides)
      const hSide = sample(hSides)
      const size = sample(sizesKeys)
      const vSideParams = sides.vSides[vSide]
      const hSideParams = sides.hSides[hSide]
      const sizeParams = sizes[size]
      // const sizeParams = sizesKeys[size] ????
      const sizeInPixels = getRandomArbitrary(sizeParams.from, sizeParams.to) + 'px'

      // Генерируем HTML

      const circle = document.createElement('div')
      circle.classList.add('largeCircle')
      
      if (vSide === 'top') {
        circle.style.top = getRandomArbitrary(vSideParams.from, vSideParams.to) + 'px'
      }

      if (vSide === 'bottom') {
        circle.style.bottom = getRandomArbitrary(vSideParams.from, vSideParams.to) + 'px'
      }

      if (hSide === 'left') {
        circle.style.left = getRandomArbitrary(hSideParams.from, hSideParams.to) + 'px'
      }

      if (hSide === 'right') {
        circle.style.right = getRandomArbitrary(hSideParams.from, hSideParams.to) + 'px'
      }

      circle.style.width = sizeInPixels
      circle.style.height = sizeInPixels

      container.appendChild(circle)

      //Обновляем данные

      vSides.splice(vSides.indexOf(vSide), 1)
      hSides.splice(hSides.indexOf(hSide), 1)
    })

    resolve()
  })
}

function generateText() {
  const { strings, sides } = model.texts
  const string = sample(strings)
  const side = sample(sides)

  const wrapper = document.createElement('div')
  wrapper.classList.add('textWrapper')
  wrapper.classList.add(side)

  const text = document.createElement('div')
  text.innerText = string
  text.contentEditable = true
  text.classList.add('text')

  wrapper.appendChild(text)
  container.appendChild(wrapper)
}

////////////////////////////////

function generateStory() {
  // generateLargeCircles().then(check)
  // prettier-ignore
  generateBackground()
  .then(generateLargeCircle)
  .then(generateText)
  // .then(checkRect)
}

document.addEventListener('DOMContentLoaded', () => {
  container = document.getElementById('prototype_10')
  generateStory()
})