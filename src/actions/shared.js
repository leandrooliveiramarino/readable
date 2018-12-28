import { getInitialData } from '../utils/api';
import { getCategories } from '../actions/categories';
import { getPosts } from '../actions/posts';
import { setAuthedUser } from '../actions/authedUser';
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
      });
  }
}