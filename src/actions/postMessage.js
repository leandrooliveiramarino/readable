export const SHOW_POST_MESSAGE = 'SHOW_POST_MESSAGE';
export const HIDE_POST_MESSAGE = 'HIDE_POST_MESSAGE';

export function showPostMessage() {
  return {
    type: SHOW_POST_MESSAGE
  }
}

export function hidePostMessage() {
  return {
    type: HIDE_POST_MESSAGE
  }
}