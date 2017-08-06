// import {createStore,applyMiddleware} from 'redux'
// import combineReducer from '../reducers/index'
// import {logger, crashReportor, thunk} from '../middlewares/index'

// const store = createStore(combineReducer, applyMiddleware(logger,crashReportor,thunk));
// export default store;


import { createStore, applyMiddleware, compose} from 'redux'
import combineReducer from '../reducers/index'
import {logger, crashReportor, thunk} from '../middlewares/index'

const store = createStore(combineReducer, {}, compose(
 applyMiddleware(logger, crashReportor, thunk),
 window.devToolsExtension ? window.devToolsExtension() : f => f
));
export default store;