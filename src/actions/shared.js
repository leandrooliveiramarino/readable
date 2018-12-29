import { getInitialData, getCommentsApi } from '../utils/api';
import { getCategories } from '../actions/categories';
import { getPosts } from '../actions/posts';
import { getComments } from '../actions/comments';
import { setAuthedUser } from '../actions/authedUser';
import { changeSortByOptions } from '../actions/sort';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'leandromarino';

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData()
      .then(({categories, posts}) => {
        dispatch(getCategories(categories));
        dispatch(getPosts(posts));
        dispatch(hideLoading());
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(changeSortByOptions({
          field: 'timestamp',
          ordination: '-1'
        }))
      });
  }
}

export function fetchComments(postId) {
  return dispatch => {
    dispatch(showLoading());
    return getCommentsApi(postId)
      .then(comments => {
        dispatch(getComments(comments))
        dispatch(hideLoading());
      })
  }
}