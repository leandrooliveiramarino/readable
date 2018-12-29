import { GET_COMMENTS, REMOVE_COMMENT, UPDATE_COMMENT, ADD_COMMENT, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT } from '../actions/comments';

export default function comments(state = {}, action) {
  switch(action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        ...action.comments
      }
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    // case REMOVE_COMMENT:
    //   return {
    //     /**
    //      * Lógica para remover o atributo do objeto "comment"
    //      */
    //     ...Object.keys(state).reduce((carry, index) => {

    //       if(!carry && index !== action.commentId) {
    //         return {
    //           [index]: state[index]
    //         };
    //       }

    //       if(!carry && index === action.commentId) {
    //         return {};
    //       }

    //       if(!carry) {
    //         return {
    //           [index]: state[index]
    //         };
    //       }

    //       if(index === action.commentId) {
    //         return carry;
    //       }

    //       carry[index] = state[index];

    //       return carry;
    //     }, null)
    //   }
    case UPDATE_COMMENT:
      return {
        ...state,
        [action.comment.id]: {
          ...action.comment
        }
      }
    case UP_VOTE_COMMENT:
      return {
        ...state,
        [action.commentId]: {
          ...state[action.commentId],
          voteScore: ++state[action.commentId].voteScore
        }
      }
    case DOWN_VOTE_COMMENT:
      return {
        ...state,
        [action.commentId]: {
          ...state[action.commentId],
          voteScore: --state[action.commentId].voteScore
        }
      }
    default:
      return state;
  }
}