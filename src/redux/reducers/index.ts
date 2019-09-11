import { combineReducers } from 'redux';
import store from '../store/index';
import { ObjLike } from '@/utils/types';

const syncReducers: ObjLike = {};

const asyncReducers: ObjLike = {};

export function createRootReducer() {
  return combineReducers({
    ...syncReducers,
    ...asyncReducers
  });
}

export function injectReducer(key: string, reducer: Function) {
  asyncReducers[key] = reducer;
  store.replaceReducer(createRootReducer());
}
