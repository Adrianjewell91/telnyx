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
export const getPosts = () => {
  return $.ajax({method: "get",
                 url: `/posts`,
  });
}

export const getPost = (id) => {
  return $.ajax({method: "get",
                 url: `/posts/${id}`,
  });
}

//thunks
export const requestPosts = () => (dispatch) => {
  return getPosts().then((res) => dispatch(receivePosts(res)));
}

export const requestPost = (id) => (dispatch) => {
  return getPost(id).then((res) => dispatch(receivePost(res)));
}
