import {createStore, combineReducers, applyMiddleware} from 'redux';
const FETCH_ARTICLES = 'FETCH_ARTICLES';
import thunk from 'redux-thunk';
const articleState = {
  isFetching: '',
  error: '',
  articles: [],
};

function artileReducer(state = articleState, action) {
  switch (action.type) {
    case 'IS_FETCHING':
      return {...state, isFetching: 'yes'};

    case 'API_ERRORED':
      return {...state, error: action.payload};
    case 'HAS_FETCHED':
      return {...state, articles: state.articles.concat(action.payload)};
  }

  return state;
}
// rough theory of making api calls
export function fetchArticles(payload) {
  // to solve you can use wether create your own middlewares , or instead use custom middleare called thunk
  //

  return function (dispatch) {
    dispatch({type: 'IS_FETCHING'});
    return fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then(response => {
        if (!response.ok) {
          dispatch({type: 'API_ERRORED', payload: response.status});
        }
        return response.json();
      })
      .then(json => {
        dispatch({type: 'HAS_FETCHED', payload: json});
      });
  };
}

const middleware = [thunk, loggerMiddlewares];
const rootReducer = combineReducers({
  articles: artileReducer,
});
export const store = createStore(rootReducer, applyMiddleware(...middleware));

function loggerMiddlewares(store) {
  return function (next) {
    return function (action) {
      console.log(action);
      return next(action);
    };
  };
}

store.subscribe(() => {
  console.log(store.getState());
});
