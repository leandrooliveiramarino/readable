import { GET_POSTS, ADD_POST, UP_VOTE, DOWN_VOTE } from '../actions/posts';

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
    case UP_VOTE:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          voteScore: ++state[action.postId].voteScore
        }
      }
    case DOWN_VOTE:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          voteScore: --state[action.postId].voteScore
        }
      }
    default:
      return state;
  }
}