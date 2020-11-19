import React from 'react'
import ReactDom from 'react-dom'
import Main from './../Main'

it('renders without crash', () => {
    const div = document.createElement('div');
    ReactDom.render(<Main />, div)
  })
  