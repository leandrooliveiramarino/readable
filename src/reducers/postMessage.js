import { SHOW_POST_MESSAGE } from '../actions/postMessage';
import { HIDE_POST_MESSAGE } from '../actions/postMessage';

export default function postMessage(state = {}, action) {
  switch(action.type) {
    case SHOW_POST_MESSAGE:
      return {
        ...state,
        show: true,
        message: action.message,
        postId: action.postId
      }
    case HIDE_POST_MESSAGE:
      return {
        ...state,
        show: false
      }
      default:
        return state;
  }
}