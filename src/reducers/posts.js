import {
  GET_POSTS,
  REMOVE_POST,
  UPDATE_POST,
  ADD_POST,
  UP_VOTE,
  DOWN_VOTE,
  INCREMENT_COMMENT_COUNT,
  DECREMENT_COMMENT_COUNT
} from '../actions/posts';

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
    case REMOVE_POST:
      return {
        /**
         * Lógica para remover o atributo do objeto "post"
         */
        ...Object.keys(state).reduce((carry, index) => {

          if(!carry && index !== action.postId) {
            return {
              [index]: state[index]
            };
          }

          if(!carry && index === action.postId) {
            return {};
          }

          if(!carry) {
            return {
              [index]: state[index]
            };
          }

          if(index === action.postId) {
            return carry;
          }

          carry[index] = state[index];

          return carry;
        }, null)
      }
    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post
        }
      }
    case UP_VOTE:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          voteScore: state[action.postId].voteScore + 1
        }
      }
    case DOWN_VOTE:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          voteScore: state[action.postId].voteScore - 1
        }
      }
    case INCREMENT_COMMENT_COUNT:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          commentCount: state[action.postId].commentCount + 1
        }
      }
    case DECREMENT_COMMENT_COUNT:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          commentCount: state[action.postId].commentCount - 1
        }
      }
    default:
      return state;
  }
}