import { combineReducers } from 'redux';
import authedUser from './authedUser';
import categories from './categories';
import posts from './posts';
import comments from './comments';
import postMessage from './postMessage';
import page from './page';
import modal from './modal';
import sort from './sort';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    categories,
    posts,
    comments,
    postMessage,
    page,
    modal,
    sort,
    loadingBar: loadingBarReducer
});
