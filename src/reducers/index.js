import { combineReducers } from 'redux';
import authedUser from './authedUser';
import categories from './categories';
import posts from './posts';
import postMessage from './postMessage';
import page from './page';
import modal from './modal';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    categories,
    posts,
    postMessage,
    page,
    modal,
    loadingBar: loadingBarReducer
});
