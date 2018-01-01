import {RECEIVE_COMMENTS} from '../actions/comments_actions';

export const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {posts: action.comments};
    default:
      return state;
  }
};
