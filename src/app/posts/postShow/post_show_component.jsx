import React from 'react';

import { Link } from 'react-router-dom';


export const PostShowComponent = ({post, showTitle}) => {
  let title;
  if (showTitle === true) {
    title = <div className="post-index-author-info">
              {post.title} by <span className="author-span">
              {post.author}</span> on {post.publish_date}
            </div>
  } else {
    title = <div></div>
  }

  return (
    <div className="post-index-item">
      {title}
      <br/>
      <div className="post-index-content"
           dangerouslySetInnerHTML={{__html: post.content}}>
      </div>
    </div>
  )
};
