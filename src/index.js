import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const storeSkiing = createStore(counter)
const storeSnowboarding = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    skiing={storeSkiing.getState()}
    snowboarding={storeSnowboarding.getState()}
    onIncrementSkiing={() => storeSkiing.dispatch({ type: 'INCREMENT' })}
    onIncrementSnowboarding={() => storeSnowboarding.dispatch({ type: 'INCREMENT' })}
  />,
  rootEl
)

render()
storeSkiing.subscribe(render)
storeSnowboarding.subscribe(render)
