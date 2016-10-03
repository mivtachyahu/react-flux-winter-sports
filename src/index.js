import React from 'react'
import ReactDOM from 'react-dom'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import DoubleCounter from './components/DoubleCounter'
import Header from './components/Header'
import * as reducers from './reducers'

const reducer = storage.reducer(combineReducers(reducers))
const engine = createEngine('my-save-key')
const middleware = storage.createMiddleware(engine)
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)

const store = createStoreWithMiddleware(reducer)

const load = storage.createLoader(engine)
load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'))

const rootEl = document.getElementById('root')


const render = () => ReactDOM.render(
  <body>
  <Header 
    title="WHAT IS YOUR FAVOURITE SPORT?"
  />
  <DoubleCounter
    valueA={store.getState().default.A}
    valueB={store.getState().default.B}
    titleA="SKIING"
    titleB="SNOWBOARDING"
    onIncrementA={() => store.dispatch({ type: 'INCREMENTA' })}
    onIncrementB={() => store.dispatch({ type: 'INCREMENTB' })}
  />
  </body>,
  rootEl
)

render()
store.subscribe(render)
