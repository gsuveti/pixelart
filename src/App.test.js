import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const initialState = {
  canvas: {
    length: 4, width: 4, pixels: {}
  },
}
const store = mockStore(initialState)

it('renders without crashing', () => {

  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
