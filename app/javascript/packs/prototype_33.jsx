import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_33/Container'
import { initSketch } from '../prototypes/prototype_33/sketch'
import { hueChange } from '../prototypes/prototype_33/hue'


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_33')
  ReactDOM.render(
    <Container initSketch={initSketch} hueChange={hueChange}/>,
    container
  )
})