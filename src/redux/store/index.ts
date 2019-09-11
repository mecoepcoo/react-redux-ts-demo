import { applyMiddleware, createStore, compose } from 'redux';
import { createRootReducer } from '../reducers/index';
import middlewares from './middlewares';

const store = createStore(createRootReducer(), compose(applyMiddleware(...middlewares)));

export default store;
