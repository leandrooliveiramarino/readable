import { generateUID } from '../utils/helper';
import { savePost, updatePost, replyPost, removePost, updatePostVote } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const UP_VOTE = 'UP_VOTE';
export const DOWN_VOTE = 'DOWN_VOTE';

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

function _savePost(post) {
  return {
    type: ADD_POST,
    post
  };
}

function _updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  };
}

function _removePost(postId) {
  return {
    type: REMOVE_POST,
    postId
  };
}

function upVote(postId) {
  return {
    type: UP_VOTE,
    postId
  };
}

function downVote(postId) {
  return {
    type: DOWN_VOTE,
    postId
  };
}

export function handleAddPost(post) {
  post.id = generateUID();
  post.timestamp = new Date().getTime();
  post.voteScore = 0;
  post.commentCount = 0;

  return (dispatch, getState) => {
    dispatch(showLoading());
    return savePost(post)
    .then(post => {
      dispatch(_savePost(post))
    })
    .then(() => dispatch(hideLoading()));
  }
}

export function handleUpdatePost(post, postId) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    return updatePost(post, postId)
    .then(post => {
      dispatch(_updatePost(post))
    })
    .then(() => dispatch(hideLoading()));
  }
}

export function handleRemovePost(postId) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    return removePost(postId)
    .then(post => {
      dispatch(_removePost(postId))
    })
    .then(() => dispatch(hideLoading()));
  }
}

export function handleUpVote(postId) {
  return (dispatch, getState) => {
    return updatePostVote(postId, 'upVote')
    .then(post => {
      dispatch(upVote(postId))
    })
    .catch((e) => {
      alert('There was an error voting the comment. Try again.');
      dispatch(downVote(postId))
    });
  }
}

export function handleDownVote(postId) {
  return (dispatch, getState) => {
    return updatePostVote(postId, 'downVote')
    .then(post => {
      dispatch(downVote(postId))
    })
    .catch((e) => {
      alert('There was an error voting the comment. Try again.');
      dispatch(upVote(postId))
    });
  }
}