import {createStore} from 'redux';
import {reducers} from './../reducer/index';
import {persistStore} from 'redux-persist';
import persistedCombiedReducer from './../reducer/index';
export const store = createStore(persistedCombiedReducer);
export const persistor = persistStore(store);
