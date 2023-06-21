import { getRandomArbitrary } from '../prototypes/utilities'

const frameRate = 1

let container

const canvasSize = {
  width: 0,
  height: 0
}

let colorSwitch = false

let h = 0
let w = 0

let x = 0
let y = 0

let r = 0
let g = 0
let b = 0

function addRectangle() {
  w = getRandomArbitrary(20, 80)
  h = getRandomArbitrary(20, 80)
  
  x = getRandomArbitrary(0, canvasSize.width - w)
  y = getRandomArbitrary(0, canvasSize.height - h)

  r = getRandomArbitrary(0, 255)
  g = getRandomArbitrary(0, 255)
  b = getRandomArbitrary(0, 255)

  const rectangle = document.createElement('div')
  rectangle.style.width = w + 'px'
  rectangle.style.height = h + 'px'

  rectangle.style.top = y + 'px'
  rectangle.style.left = x + 'px'

  if (colorSwitch) {
    rectangle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  } else {
    rectangle.style.backgroundColor = `rgb(${r}, ${r}, ${r})`
  }

  container.appendChild(rectangle)
}

function clearCanvas() {
  // const rectangles = document.querySelectorAll('#prototype_15 div')
  container.innerHTML = ''
}

function renderUI() {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const toggleSwitch = document.createElement('div')
  toggleSwitch.classList.add('toggleSwitch')
  toggleSwitch.innerText = 'Toggle Color'

  toggleSwitch.addEventListener('click', () => {
    toggleSwitch.classList.toggle('active')
    colorSwitch = !colorSwitch
  })

  const resetButton = document.createElement('div')
  resetButton.classList.add('resetButton')
  resetButton.innerText = 'Clear'

  resetButton.addEventListener('click', () => {
    clearCanvas()
  })

  wrapper.appendChild(toggleSwitch)
  wrapper.appendChild(resetButton)
  document.body.appendChild(wrapper)
}

document.addEventListener('DOMContentLoaded', () =>{
  container = document.getElementById('prototype_15')

  canvasSize.height = window.innerHeight
  canvasSize.width = window.innerWidth
  
  renderUI()
  setInterval(addRectangle, 1000 / frameRate)
})