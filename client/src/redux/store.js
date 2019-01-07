// Modules
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'

const defaultStore = {}

const middleware = applyMiddleware(promise(), thunk)

const store = createStore(
    reducer,
    defaultStore,
    composeWithDevTools(middleware)
)

export default store