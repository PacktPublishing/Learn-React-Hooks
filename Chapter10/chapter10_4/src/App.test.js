import React from 'react'
import ReactDOM from 'react-dom'
import { RequestProvider } from 'react-request-hook'
import axios from 'axios'

import App from './App'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

// "mock" window.scroll function to avoid errors in test runs
Object.defineProperty(global.window, 'scroll', { value: function () {} })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <RequestProvider value={axiosInstance}>
      <App />
    </RequestProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
