import path from 'path'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import lepusApp from './reducers'
import App from './container/app'

import { renderToString } from 'react-dom/server'

const store = createStore(lepusApp)

export default {
    getHtml: () => {
        return renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        )
    },
    getInitialState: () => store.getState()
}
