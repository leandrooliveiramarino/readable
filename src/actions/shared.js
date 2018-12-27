import { getInitialData } from '../utils/api';
import { getCategories } from '../actions/categories';
import { getPosts } from '../actions/posts';
import { setPageName } from '../actions/page';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData()
      .then(({categories, posts}) => {
        dispatch(getCategories(categories));
        dispatch(getPosts(posts));
        dispatch(hideLoading());
      });
  }
}