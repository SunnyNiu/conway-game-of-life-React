import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import gameReducer from './redux/reducer'
import * as serviceWorker from './serviceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  gameReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))

serviceWorker.unregister()
