import React from 'react';

import { Link } from 'react-router-dom';


export const PostShowComponent = ({post}) => (
  <li className="post-index-item">
    <div className="post-index-author-info">
      {post.publish_date}: {post.title} by {post.author}
    </div>
    <br/>
    <div className="post-index-content"
         dangerouslySetInnerHTML={{__html: post.content}}>
    </div>
  </li>
);
