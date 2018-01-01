import React from 'react';

//I'm going to need to do some recusion here to present the comments.

export const CommentShowComponent = ({comment}) => {

  if (comment.Children.length === 0) {
    return (
      <div className="comment-index-item">
        <div className="comment-show-author-info">
          <span className="author-span">{comment.user}</span> on {comment.date}:
        </div>
        <br/>
        <div className="comment-show-content">{comment.content}}</div>
        <br/>
      </div>
    );
  } else {
    //build the component, then return the whole thing.
    return (
      <div className="comment-index-item">
        <div className="comment-show-author-info">
          <span className="author-span">{comment.user}</span> on {comment.date}:
        </div>
        <br/>
        <div className="comment-show-content">{comment.content}}</div>
        <br/>
        <ul>
          {
            comment.Children.map((child) => {
              return <li key={`commentId${child.id}`}><CommentShowComponent comment={child}/></li>
            })
          }
        </ul>
      </div>
    );
  }
};
