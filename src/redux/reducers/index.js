import {
  configureStore,
  createReducer,
  createAction,
  createSlice,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

export const initState = [
  // {id: 1, name: 'alireza'},
  // {id: 2, name: 'ali'},
  // {id: 3, name: 'reza'},
  // {id: 4, name: 'aza'},
];

export const addingpost = createAction('ADDINGPOST');
export const remove = createAction('REMOVINGGPOST');
export const update = createAction('update');

const postReducer = createReducer(initState, {
  [addingpost]: (state, action) => {
    state.push(action.payload);
    return state;
  },
  [remove]: (state, action) => {
    console.log('remove');
    state.filter(e => {
      e.id === action.payload.id;
    });
    console.log(state);
    return state;
  },
  [update]: (state, action) => {
    console.log('update');
    return state;
  },
  // [removingpost]: (state, action) => {
  //   state.filter(e => e !== action.payload.id);
  // },
});
const Reducers = combineReducers({
  post: postReducer,
});

export const store = configureStore({
  reducer: Reducers,
  middleware: [...getDefaultMiddleware(), loggeMiddleWare],
});

// =>>>>>>>>>>> MIDDLEWARE CLASSIC
// core login or busssines ui form your ui     thats what middleware does
// lets you the ability to intercept any action before getting dispatched

const middlewares = [loggeMiddleWare];
// const store = createStore(reducer , applymiddleware(...middlewares))

//NANA next action , next(action)
function loggeMiddleWare(store) {
  return function (next) {
    // next is a functionn
    //if you forget next next()
    return function (action) {
      // store.getState();
      console.log(store.getState());
      console.log(action);
      return next(action);
    };
  };
}
