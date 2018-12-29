import { generateUID } from '../utils/helper';
import { saveComment, updateComment, replyComment, removeComment, updateCommentVote } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

function _saveComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

function _updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}

// function _removeComment(commentId) {
//   return {
//     type: REMOVE_COMMENT,
//     commentId
//   };
// }

function upVote(commentId) {
  return {
    type: UP_VOTE_COMMENT,
    commentId
  };
}

function downVote(commentId) {
  return {
    type: DOWN_VOTE_COMMENT,
    commentId
  };
}

export function handleAddComment(comment, postId) {
  comment.id = generateUID();
  comment.parentId = postId;
  comment.timestamp = new Date().getTime();

  return (dispatch, getState) => {
    dispatch(showLoading());
    return saveComment(comment)
    .then(comment => {
      dispatch(_saveComment(comment))
    })
    .then(() => dispatch(hideLoading()));
  }
}

export function handleUpdateComment(comment, commentId) {
  comment.timestamp = new Date().getTime();

  return (dispatch, getState) => {
    dispatch(showLoading());
    return updateComment(comment, commentId)
    .then(comment => {
      dispatch(_updateComment(comment))
    })
    .then(() => dispatch(hideLoading()));
  }
}

// export function handleReplyComment(comment, parentId) {
//   return (dispatch, getState) => {
//     dispatch(showLoading());
//     return replyComment(comment, parentId)
//     .then(comment => {
//       dispatch(_replyComment(comment))
//     })
//     .then(() => dispatch(hideLoading()));
//   }
// }

// export function handleRemoveComment(commentId) {
//   return (dispatch, getState) => {
//     dispatch(showLoading());
//     return removeComment(commentId)
//     .then(comment => {
//       dispatch(_removeComment(commentId))
//     })
//     .then(() => dispatch(hideLoading()));
//   }
// }

export function handleUpVote(commentId) {
  return (dispatch, getState) => {
    return updateCommentVote(commentId, 'upVote')
    .then(comment => {
      dispatch(upVote(commentId))
    })
    .catch((e) => {
      alert('There was an error voting the comment. Try again.');
      dispatch(downVote(commentId))
    });
  }
}

export function handleDownVote(commentId) {
  return (dispatch, getState) => {
    return updateCommentVote(commentId, 'downVote')
    .then(comment => {
      dispatch(downVote(commentId))
    })
    .catch((e) => {
      alert('There was an error voting the comment. Try again.');
      dispatch(upVote(commentId))
    });
  }
}