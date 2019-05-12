import React from 'react'

export const StateContext = React.createContext({
  state: {},
  dispatch: () => {}
})

export const ThemeContext = React.createContext({
  primaryColor: 'deepskyblue',
  secondaryColor: 'coral'
})
