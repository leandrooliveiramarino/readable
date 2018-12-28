import { PAGE_NAME } from '../actions/page';

export default function posts(state = {}, action) {
  switch(action.type) {
    case PAGE_NAME:
      return {
        ...state,
        name: action.name,
        subtitle: action.subtitle
      }
    default:
      return state;
  }
}