import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';

export default function modal (state = {}, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        action: action.action,
        title: action.title,
        submitButtonLabel: action.submitButtonLabel,
        parentId: action.parentId
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