import {RECEIVE_POSTS} from '../actions/posts_actions';
import {RECEIVE_POST} from '../actions/posts_actions';

export const postsReducer = (state = {formattedPosts: {}, slugs: {}}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      //sort them by date here.
      let formattedPosts = {};
      action.posts.forEach((el) => formattedPosts[el.id] = el);
      let slugs = {};
      action.posts.forEach((el) => slugs[el.slug] = el.id);
      return {formattedPosts, slugs};
    case RECEIVE_POST:
      return {formattedPosts: {[action.post.id]: action.post},
              slugs: {[action.post.slug]: action.post.id}};
      // slugs: {[action.post.slug]: action.post.id}}
    default:
      return state;
  }
};
