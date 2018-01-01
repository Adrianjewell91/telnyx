import {RECEIVE_POSTS} from '../actions/posts_actions';
import {RECEIVE_POST} from '../actions/posts_actions';

export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      let slugs = {};
      action.posts.forEach((el) => slugs[el.slug] = el['id']);
      return {posts: action.posts, slugs: slugs};
    case RECEIVE_POST:
      return {posts: action.post, slugs: {[action.post.slug]: action.post.id}}
    default:
      return state;
  }
};
