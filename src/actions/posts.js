import { generateUID } from '../utils/helper';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

export function handleAddPost(post) {
  post.id = generateUID();
  post.timestamp = new Date().getTime();
  post.voteScore = 0;
  post.commentCount = 0;

  return {
    type: ADD_POST,
    post
  }
}