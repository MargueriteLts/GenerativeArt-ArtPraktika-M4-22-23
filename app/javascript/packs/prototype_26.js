const url = 'http://colormind.io/api/'
const data = {
  model: 'default'
}



function updatePalette(data) {
  const container = document.getElementById('container')

  container.childNodes.forEach((colorElement, index) => {
    const color = data[index]
    colorElement.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  })
}

function initButton() {
  const button = document.createElement('div')
  button.id = 'button'
  button.innerText = 'Generate Palette'
  
  button.addEventListener('click', () => {
    fetch(url, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        updatePalette(data.result)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  })

  document.getElementById('prototype_26').appendChild(button)
}

function initPalette() {
  const container = document.createElement('div')
  container.id = 'container'

  for (let index = 0; index < 5; index++) {
    const color = document.createElement('div')
    container.appendChild(color)
  }

  document.getElementById('prototype_26').appendChild(container)
}

document.addEventListener('DOMContentLoaded', () => {
  initButton()
  initPalette()
})