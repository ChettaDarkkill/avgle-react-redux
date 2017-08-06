import { createStore, applyMiddleware, compose} from 'redux'
import combineReducer from '../reducers/index'
import {logger, thunk} from '../middlewares/index'

const store = createStore(combineReducer, {}, compose(
 applyMiddleware(logger, thunk),
 window.devToolsExtension ? window.devToolsExtension() : f => f
));
export default store;