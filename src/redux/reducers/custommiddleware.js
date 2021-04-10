import {
  configureStore,
  createAsyncThunk,
  createSlice,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import {createStore, combineReducers, applyMiddleware} from 'redux';

import {gerLinks} from './../../Utils/Api/apicals/articles';
// const articleState = {
//   isFetching: '',
//   error: '',
//   articles: [],
// };
// const FETCH_ARTICLES = 'FETCH_ARTICLES';
// const ARTICLE_FETCHED = 'ARTICLE_FETCHED';
// const ARTICLE_ERRORED;

// function artileReducer(state = articleState, action) {
//   switch (action.type) {
//     case ARTICLE_FETCHED:
//       return {...state, articles: state.articles.concat(action.payload)};
//   }

//   return state;
// }
// // rough theory of making api calls
// export function fetchArticles(payload) {
//   return {
//     type: FETCH_ARTICLES,
//   };
// }

// export function articlesFetched(payload) {
//   return {
//     type: ARTICLE_FETCHED,
//     payload,
//   };
// }
// 'https://jsonplaceholder.typicode.com/users/'
// const middleware = [loggerMiddlewares, apiMiddleware];
// const rootReducer = combineReducers({
//   articles: artileReducer,
// });
// function apiMiddleware({dispatch}) {
//   return function (next) {
//     return function (action) {
//       switch (action.type) {
//         case FETCH_ARTICLES:
//           gerLinks(4000).then(json => {
//             dispatch(articlesFetched(json));
//           });
//           break;
//       }
//       return next(action);
//     };
//   };
// }
export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (endpoint, thunkAPI) => {
    // thunkAPI.getState()   // can be used here
    return fetch(endpoint)
      .then(Response => {
        if (!Response.ok) {
          throw Error(Response.statusText);
        }
      })
      .then(json => json);
  },
);
const userSlice = createSlice({
  name: 'users',
  initialState: {
    loading: '',
    error: '',
    data: [],
  },
  reducers: {
    [getUsers.pending]: state => {
      state.loading = 'yes';
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = '';
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = '';
    },
  },
});

const userReducer = userSlice.reducer;
// export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const store = configureStore({
  reducer: {userReducer},
  middleware: [...getDefaultMiddleware(), loggerMiddlewares],
});

function loggerMiddlewares(store) {
  return function (next) {
    return function (action) {
      console.log(action);
      return next(action);
    };
  };
}
//

store.subscribe(() => {
  console.log(store.getState());
});
