import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'mobx-react'
import TodoStore from './store'

const store = new TodoStore()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider todoStore={store}>
      <App />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
