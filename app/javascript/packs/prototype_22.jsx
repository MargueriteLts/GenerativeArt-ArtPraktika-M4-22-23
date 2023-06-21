import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_22/Container'
import { initSketch } from '../prototypes/prototype_22/sketch'
import { getStoreShift, setStoreShift, getStoreEnthropy, setStoreEnthropy, getStoreEffect, setStoreEffect } from '../prototypes/prototype_22/store'

const props = {
  shift : (getStoreShift),
  enthropy : (getStoreEnthropy),
  effect : (getStoreEffect)
}

const actions = {
  setStoreShift,
  setStoreEnthropy,
  setStoreEffect
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_22')
  ReactDOM.render(<Container initSketch={initSketch} {...props} {...actions} />, container)
})