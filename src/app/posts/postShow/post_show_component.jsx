import React from 'react';

import { Link } from 'react-router-dom';


export const PostShowComponent = (props) => (
  <li className="post-index-item">
    <div className="post-index-author-info">
      {props.post.publish_date}: {props.post.title} by {props.post.author}
    </div>
    <br/>
    <div className="post-index-content"
         dangerouslySetInnerHTML={{__html: props.post.content}}>
    </div>
  </li>
);
