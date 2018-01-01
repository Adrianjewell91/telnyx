/**
 * @overview Application entry point.
 */
 import 'src/entry.scss';
 import React from 'react';
 import ReactDOM from 'react-dom';
 import configureStore from "./store/store";
 import Root from "./app/root";

 document.addEventListener("DOMContentLoaded", () => {

   let store;
   // if (window.currentUser) {
   //   const preLoadedState = {session: {currentUser: window.currentUser}};
   //   store = configureStore(preLoadedState);
   //   delete window.currentUser;
   // } else {
   store = configureStore();
   // }
   window.store = store;
   const root = document.getElementById("root");
   ReactDOM.render(<Root store={store}/>, root);
 });
