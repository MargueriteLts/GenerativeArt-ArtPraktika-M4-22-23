import { generateHash } from '../utilities.js'
import html2canvas from 'html2canvas'

function generateImage() {
    return new Promise((resolve, reject) => {
      const container = document.getElementById('cover')

      html2canvas(container).then((canvas) => {
        canvas.style.position = 'absolute'
        canvas.style.left = '-99999px'
        document.body.appendChild(canvas)

        resolve()
      })
    })
  }
  

  function downloadImage() {
    const canvas = document.querySelector('.CoverFrame')
    const imageData = canvas.toDataURL('image/png')

    const link = document.createElement('a')
    link.download = `Cover-41-${generateHash()}.png`
    link.href = imageData
    link.click()
    link.remove()

    canvas.remove()
  }

  function createImage() {
    generateImage().then(downloadImage)
  }

  export { createImage }