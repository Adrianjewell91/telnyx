import {RECEIVE_COMMENTS} from '../actions/comments_actions';
import {RECEIVE_COMMENT} from '../actions/comments_actions';

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      // let commentsById = {};
      // action.comments.forEach((el) => commentsById[el.id] = el);
      // return commentsById
      return action.comments
    case RECEIVE_COMMENT:
      // return Object.assign(state, {[action.comment.id]: action.comment});
      return state + action.comment;
    default:
      return state;
  }
};
