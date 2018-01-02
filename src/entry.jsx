/**
 * @overview Application entry point.
 */
 import 'src/entry.scss';
 import React from 'react';
 import ReactDOM from 'react-dom';
 import configureStore from "./store/store";
 import Root from "./app/root";

// import * as PostActions from "./actions/posts_actions";
// import * as CommentsActions from "./actions/comments_actions";

 document.addEventListener("DOMContentLoaded", () => {

   let store;
   store = configureStore();

   // window.store = store;
   // window.PostActions = PostActions;
   // window.CommentsActions = CommentsActions;

   const root = document.getElementById("root");
   ReactDOM.render(<Root store={store}/>, root);
 });
