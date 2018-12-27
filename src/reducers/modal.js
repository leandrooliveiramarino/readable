import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';

export default function modal (state = {}, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true
      };
    case HIDE_MODAL:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
}