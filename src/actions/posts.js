import { generateUID } from '../utils/helper';
import { savePost, updateVote } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const UP_VOTE = 'UP_VOTE';
export const DOWN_VOTE = 'DOWN_VOTE';

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
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
    return savePost({
      ...post
    })
    .then(post => {
      dispatch(addPost(post))
    })
    .then(() => dispatch(hideLoading()));
  }
}

export function handleUpVote(postId) {
  return (dispatch, getState) => {
    return updateVote(postId, 'upVote')
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
    return updateVote(postId, 'downVote')
    .then(post => {
      dispatch(downVote(postId))
    })
    .catch((e) => {
      alert('There was an error voting the comment. Try again.');
      dispatch(upVote(postId))
    });
  }
}