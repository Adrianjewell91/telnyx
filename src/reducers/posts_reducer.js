import {RECEIVE_POSTS} from '../actions/posts_actions';
import {RECEIVE_POST} from '../actions/posts_actions';

export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      //sort them by date here.
      let formattedPosts = {};
      action.posts.forEach((el) => formattedPosts[el.publish_date] = el);
      return formattedPosts;
    case RECEIVE_POST:
      return {[action.post.publish_date]: action.post};
      // slugs: {[action.post.slug]: action.post.id}}
    default:
      return state;
  }
};
