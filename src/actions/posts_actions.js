export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";

//action-creators
export const receivePosts = (posts) => (
  {type: RECEIVE_POSTS, posts}
);

export const receivePost = (post) => (
  {type: RECEIVE_POST, post}
);


//util
export const getPosts = (callback) => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:9001/posts');
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


export const getPost = (id, callback ) => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `http://localhost:9001/posts/${id}`);
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

//thunks
export const requestPosts = () => (dispatch) => {
  return getPosts((res) => dispatch(receivePosts(res)));
}

export const requestPost = (id) => (dispatch) => {
  return getPost(id , (res) => dispatch(receivePost(res)));
}
