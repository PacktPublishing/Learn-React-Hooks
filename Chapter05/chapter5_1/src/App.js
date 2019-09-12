import React from 'react';
import './App.css';
import Header from './Header'

export const ThemeContext = React.createContext({ primaryColor: 'deepskyblue' })

const App = () => (
  <ThemeContext.Provider value={{ primaryColor: 'coral' }}>
      <Header text="Hello World" />
      <ThemeContext.Provider value={{ primaryColor: 'deepskyblue' }}>
          <Header text="This is a test" />
      </ThemeContext.Provider>
  </ThemeContext.Provider>
)

export default App
