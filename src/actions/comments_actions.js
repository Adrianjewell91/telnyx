export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

//action-creators
export const receiveComments = (comments) => (
  {type: RECEIVE_COMMENTS, comments}
);

export const receiveComment = (comment) => (
  {type: RECEIVE_COMMENT, comment}
);

//util
export const getComments = (postId,callback) => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `http://localhost:9001/posts/${postId}/comments/`);
  xhr.onload = function() {
      if (xhr.status === 200) {
          callback(JSON.parse(xhr.responseText));
      }
      else {
          console.log(xhr.status);
      }
  };
  xhr.send();
}

export const postComment = (data, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', `http://localhost:9001/posts/${data.postId}/comments/`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
      if (xhr.status === 201) {
          callback(JSON.parse(xhr.responseText));
      }
      else {
          console.log(xhr.status);
      }
  };
  xhr.send(JSON.stringify(data));
}

//thunks
export const requestComments = (postId) => (dispatch) => {
  return getComments(postId,(res) => dispatch(receiveComments(res)));
}

export const createComment = (data) => (dispatch) => {
  return postComment(data,(res) => dispatch(receiveComment(res)));
}
