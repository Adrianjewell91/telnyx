import {RECEIVE_COMMENTS} from '../actions/comments_actions';
import {RECEIVE_COMMENT} from '../actions/comments_actions';

export const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      //maybe I should nest them here.
      // {
      //   id: {
      //         comment: {}
      //         children: [{comment: {}, children: false},
      //                    {comment: {}, children: []],
      //   id: {comment: {}, children: []}
      // }
      let commentsById = {};
      action.comments.forEach((el) => commentsById[el.id] = el);
      return commentsById
    case RECEIVE_COMMENT:
      return Object.merge(state, {[action.comment.id]: action.comment});
    default:
      return state;
  }
};
