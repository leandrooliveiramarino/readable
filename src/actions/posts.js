import { generateUID } from '../utils/helper';
import { savePost } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';

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
      console.log(post);
      dispatch(addPost(post))
    })
    .then(() => dispatch(hideLoading()));
  }
}