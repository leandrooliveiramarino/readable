import { CHANGE_SORT_OPTION } from '../actions/sort';

export default function sort(state = {}, action) {
  switch(action.type) {
    case CHANGE_SORT_OPTION:
      return {
        ...state,
        ...action.options
      }
    default:
      return state;
  }
}