# Telnyx Coding Challenge

## How to Run

1. In terminal, run
`git clone https://github.com/Adrianjewell91/telnyx.git`. Remember to navigate into the directory before moving forward.

2. Run `npm install` to install dependencies.

3. Run `npm start` (runs both the stubbed Restful server and the frontend.)

If the app doesn't do it automatically, navigate to http://localhost:9000 in the browser.

## UI Features

1. Blog feed, sorted by date from newest to oldest.

2. Nested comments and 'reply' functionality at any level of depth.

## Technical Features

1. Redux for Management of Posts and Comment - state shape supports new Features.
2. Blog Post URL Slugs - Direct Access to Blog Posts from Urls (ie. go directly to /posts/blog-post-1 in the address bar).
3. Asynchronous HTTP Requests with Vanilla-JS and Thunk middleware (for passing data into Redux store).
4. Recursion and Topographical Sort for Handling Nested Comments from a Flat list (with assistance from user 'nu11ptr' on stack-overflow).
5. Use of React refs for toggling Comment-Box.
6. Update from React-Router v3 to React-Router-Dom v4.
7. Simple Logic for preventing empty comment submission.
8. SCSS Compiling.
9. Some Unit Tests.
10. Provider, HashRouter, containerization of components to map state and dispatch to props.

## Potential Further Implementations:

1. Infinite Scrolling

2. More Styling
