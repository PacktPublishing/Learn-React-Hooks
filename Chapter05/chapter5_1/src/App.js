import React from 'react';
import './App.css';
import Header from './Header'

export const ThemeContext = React.createContext({ primaryColor: 'deepskyblue' })

const App = () => (
  <ThemeContext.Provider value={{ primaryColor: 'coral' }}>
    <Header text="Hello World" />
  </ThemeContext.Provider>
)

export default App
