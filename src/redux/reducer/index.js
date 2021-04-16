import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import postReducer from './post';
import userReducer from './user';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['postReducer'],
};

export const reducers = combineReducers({
  postReducer,
  userReducer,
});

export default persistReducer(persistConfig, reducers);
