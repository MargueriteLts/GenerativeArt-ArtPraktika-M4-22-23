import { sample } from '../prototypes/utilities'

function createLargeWhiteCircle() {
  return new Promise((resolve, reject) => { 
    const sides = ['top', 'bottom']
    const side = sample(sides)
    console.log(side)

    resolve(side)
  })
}

function check(side) {
  console.log(side)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_5')

  console.log(createLargeWhiteCircle().then((side) => { check(side) }))
})