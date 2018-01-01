import React from 'react';

import { Link } from 'react-router-dom';


export const PostShowComponent = ({post}) => (
  <div className="post-index-item">
    <div className="post-index-author-info">
      {post.title} by <span className="author-span">{post.author}</span> on {post.publish_date}
    </div>
    <br/>
    <div className="post-index-content"
         dangerouslySetInnerHTML={{__html: post.content}}>
    </div>
  </div>
);
