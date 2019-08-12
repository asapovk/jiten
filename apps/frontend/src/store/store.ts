import { createStore, combineReducers, applyMiddleware, compose, ReducersMapObject } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/**
 * Redux devtools globals
 */
// @ts-ignore
let DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

/**
 * Webpack defenition
 */
// @ts-ignore
if ($_PRODUCTION_$) {
    DEVTOOLS = null;
}

const composeEnhancers = DEVTOOLS ? DEVTOOLS({
    name: `Template`
}) : compose;

export default (reducers: ReducersMapObject) => {
    return createStore(
        combineReducers(reducers),
        composeEnhancers(
            applyMiddleware(thunk, logger)
        )
    )
}