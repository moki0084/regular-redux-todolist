import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import cloneDeep from 'lodash/cloneDeep'
import preloadedState from './initState'
import reducer from './reducer'
import actionsTypes from './actionsType'

let store
const env = process.env.NODE_ENV

if (env === 'development') {
  store = createStore(reducer, cloneDeep(preloadedState), composeWithDevTools()) // redux-devtools
} else {
  store = createStore(reducer, cloneDeep(preloadedState))
}

store.name = 'todo'

export default store

export const actionsType = {
  ...actionsTypes
}
