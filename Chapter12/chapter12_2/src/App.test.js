import React from 'react'
import ReactDOM from 'react-dom'
import ConnectedApp from './containers/ConnectedApp'
import { Provider } from 'react-redux'
import store from './configureStore'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
