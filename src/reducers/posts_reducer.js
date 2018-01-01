import {RECEIVE_POSTS} from '../actions/posts_actions';
import {RECEIVE_POST} from '../actions/posts_actions';

export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return {post: action.post, slug: {[action.post.slug]: action.post.id}}
    default:
      return state;
  }
};
