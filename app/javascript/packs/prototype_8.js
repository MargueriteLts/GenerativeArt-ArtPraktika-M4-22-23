import { sample } from '../prototypes/utilities'
import { getLargeCircleStore, setLargeCircleStore } from '../prototypes/prototype_8/store'
import { model } from '../prototypes/prototype_8/model'

const sides = Object.keys(model.largeCircles.sides.vSides)

function generateLargeCircles() {
  
  return new Promise((resolve, reject) => { 
    const promises = []

    sides.forEach((side, i) => {
      const promise = generateLargeCircle(sides)
      promises.push(promise)
    })
    
    Promise.all(promises).then(resolve)

    generateLargeCircle(sides)
      .then((sides) => {
        generateLargeCircle(sides)
      })
      .then(resolve)
   })
}

function generateLargeCircle(sides) {
  return new Promise((resolve, reject) => {
    const side = sample(sides)
    const index = sides.indexOf(side)
     
    if (index > -1) {
      sides.splice(index, 1)
    }

    const largeCircleStore = getLargeCircleStore()
    largeCircleStore.push(side)
    setLargeCircleStore(largeCircleStore)
      
    resolve(sides)
  })
}

function generateStory() {
  generateLargeCircles()
    // .then(generateLargeCircle)
    // .then(generateLargeCircle)
}

document.addEventListener('DOMContentLoaded', () => {
  // const container = document.getElementById('prototype_7')

  generateStory()
})