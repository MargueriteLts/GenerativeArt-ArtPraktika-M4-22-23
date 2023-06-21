const model = {
  background: ['white', 'green', 'black'],
  largeCircles: {
    sides: {
      vSides: {
        top: {
          from: 30,
          to: 70
        },
        bottom: {
          from: 30,
          to: 70
        }
      },
      hSides: {
        left: {
          from: 0,
          to: 60
        },
        right: {
          from: 0,
          to: 60
        }
      }
    },
    sizes: {
      small: {
        from: 50,
        to: 110
      },
      large: {
        from: 400,
        to: 600
      }
    }
  },
  texts: {
    strings: [
      'blablabla',
      '111111111',
      'Some Text Some Text Some Text Some Text Some Text'
    ],
    sides: [
      'top', 'center', 'bottom'
    ]
  }
}

export { model }