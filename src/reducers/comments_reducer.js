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
      let newState = [];
      state.forEach((el) => newState.push(el));
      newState.push(action.comment);
      return newState;
    default:
      return state;
  }
};
