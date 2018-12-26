export const SHOW_POST_MESSAGE = 'SHOW_POST_MESSAGE';
export const HIDE_POST_MESSAGE = 'HIDE_POST_MESSAGE';

export function showPostMessage(post) {
  return {
    type: SHOW_POST_MESSAGE,
    message: post.body,
    postId: post.id
  }
}

export function hidePostMessage() {
  return {
    type: HIDE_POST_MESSAGE
  }
}