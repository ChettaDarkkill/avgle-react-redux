
import App from './components/App'
import store from './redux/store/config'
import {render} from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)