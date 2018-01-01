import {RECEIVE_POSTS} from '../actions/posts_actions';

export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {posts: action.posts};
    default:
      return state;
  }
};
