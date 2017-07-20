import { applyMiddleware, createStore, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import {toaster} from '../../lib'

const middleware = applyMiddleware(
    promise(),
    thunk
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware)

const reducers = {
    toaster
}

const store = Object.keys(reducers).length > 0 ? createStore(combineReducers(reducers), enhancer) : createStore(enhancer)

export default store
