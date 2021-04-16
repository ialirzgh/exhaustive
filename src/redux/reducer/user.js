import {initialstate} from './post';

export function userReducer(state = initialstate.user, action) {
  switch (action.type) {
    case 'POST_ADDcED':
      return [...state, action.payload];
    default:
      return state;
  }
}
export default userReducer;
