import {createStore, applyMiddleware} from 'redux';
import {reducers} from './../reducer/index';
import {persistStore} from 'redux-persist';
import persistedCombiedReducer from './../reducer/index';
import thunk from 'redux-thunk';
const middleware = [thunk];
export const store = createStore(
  persistedCombiedReducer,
  applyMiddleware(...middleware),
);
export const persistor = persistStore(store);

// function fethcing (payload){
//     return function (dispatch){
//         return promise
//     }
// }
