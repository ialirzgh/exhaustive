export const initialstate = {
  rehydrated: false,
  posts: [
    {
      id: Math.random(),
      name: 'ali',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/AS-Motor_Logo.svg/1200px-AS-Motor_Logo.svg.png',
      post:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/AS-Motor_Logo.svg/1200px-AS-Motor_Logo.svg.png',
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
