export const initialstate = {
  rehydrated: false,
  posts: [
    {
      id: Math.random(),
      name: 'mamad',
      avatar:
        'https://specials-images.forbesimg.com/imageserve/1144022172/960x0.jpg?fit=scale',
      post:
        'https://www.comingsoon.net/assets/uploads/2020/05/f34dbf30a4d3a7462b1ca5b219ba9400.jpg',
      time: '8mins ago',
    },
  ],
  user: {},
};
export function postReducer(state = initialstate.posts, action) {
  switch (action.type) {
    case 'POST_ADDED':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default postReducer;
