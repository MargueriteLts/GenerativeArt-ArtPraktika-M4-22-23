import { getRandomArbitrary, sample } from '../prototypes/utilities'

function createCircle(container) {
  const svgElement = document.createElement('svg')
  svgElement.classList.add('svgElem')

  const top = getRandomArbitrary(-100, 1720)
  const left = getRandomArbitrary(-100, 980)
  const size = getRandomArbitrary(10, 500)

  svgElement.style.top = [top, 'px'].join('')
  svgElement.style.left = [left, 'px'].join('')

  svgElement.style.width = [size, 'px'].join('')
  svgElement.style.height = [size, 'px'].join('')

  container.appendChild(svgElement)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_28')
  createCircle(container)

  // for (var i = 0; i < 50; i++) {
  //   createCircle(container)
  // }
})