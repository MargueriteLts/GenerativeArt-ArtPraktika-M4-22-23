import { sample } from '../utilities.js'

let numbers = ['1', '2', '3', '4', '5']
let numb = sample(numbers)

function hueChange() {
  const colorChange = document.getElementById('defaultCanvas0')
  let classHueChange = 'hue'+numb

  colorChange.classList.add(classHueChange)
}

export { hueChange }