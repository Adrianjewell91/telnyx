import { combineReducers } from 'redux';
import {commentsReducer} from './comments_reducer';
import {postsReducer} from './posts_reducer';

export default combineReducers({
    posts: postsReducer,
    comments: commentsReducer
});
