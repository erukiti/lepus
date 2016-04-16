import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './container/app'
import counterApp from './reducers'

export default (elem) => {
    // Grab the state from a global injected into server-generated HTML
    const initialState = window.__INITIAL_STATE__

    // Create Redux store with initial state
    const store = createStore(counterApp, initialState)

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        elem
    )
}
