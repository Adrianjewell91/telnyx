import {RECEIVE_COMMENTS} from '../actions/comments_actions';
import {RECEIVE_COMMENT} from '../actions/comments_actions';

import {commentsReducer} from './comments_reducer';

describe('CommentsReducer', function() {
  let previousState;
  let newState;

  beforeEach(function() {
    previousState = [
      {
        "id": 1,
        "postId": 1,
        "parent_id": null,
        "user": "Amelia",
        "date": "2016-02-23",
        "content": "Nulla in nulla vel nisi faucibus scelerisque. Donec quis tortor."
      },
      {
        "id": 2,
        "postId": 1,
        "parent_id": 1,
        "user": "Jake",
        "date": "2016-02-23",
        "content": "Cras lectus nisl, scelerisque quis elit ut, luctus scelerisque purus."
      },
      {
        "id": 3,
        "postId": 1,
        "parent_id": 2,
        "user": "Amelia",
        "date": "2016-02-24",
        "content": "Cras est nunc, tempus eget risus vitae, vulputate ornare magna."
      },
      {
        "id": 4,
        "postId": 1,
        "parent_id": 1,
        "user": "Natashia",
        "date": "2016-02-23",
        "content": "Mauris malesuada a tellus at mollis. Nam eu eros ipsum."
      }
      ]
  });

  it("doesn't alter the previous state", function() {
    let action = {
            type: RECEIVE_COMMENT,
            comment: {
            "id": 5,
            "postId": 1,
            "parent_id": null,
            "user": "Shella",
            "date": "2016-02-24",
            "content": "Mauris vitae sem in nisl pharetra dapibus in nec orci."
            }
          }
    newState = commentsReducer(previousState, action)
    expect(previousState).not.toContain(action.comment);
    expect(newState).toContain(action.comment);
  });
});
