export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showModal({action, submitButtonLabel, title, parentId}) {
  return {
    type: SHOW_MODAL,
    action,
    submitButtonLabel,
    title,
    parentId
  }
};

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
};