import { GET_POSTS, ADD_POST } from '../actions/posts';

export default function posts(state = {}, action) {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        ...action.posts
      }
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
      default:
        return state;
  }
}