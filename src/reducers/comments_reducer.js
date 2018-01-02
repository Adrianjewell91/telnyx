import {RECEIVE_COMMENTS} from '../actions/comments_actions';
import {RECEIVE_COMMENT} from '../actions/comments_actions';

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case RECEIVE_COMMENT:
      let newState = [];
      state.forEach((el) => newState.push(el));
      newState.push(action.comment);
      return newState;
    default:
      return state;
  }
};

//Test that the reducer doesn't manipulate state;
