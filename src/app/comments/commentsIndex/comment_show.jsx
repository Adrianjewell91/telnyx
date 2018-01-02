import React from 'react';

//I'm going to need to do some recusion here to present the comments.
import AddCommentContainer from '../addComment/add_comment_container';
// import AddComment from '../addComment/add_comment';

export const CommentShowComponent = ({comment}) => {
  let singleComment = <div>
                        <div className="comment-index-item">
                          <div className="comment-show-author-info">
                            <span className="author-span">{comment.user}</span> on {comment.date}:
                          </div>
                          <br/>
                          <div className="comment-index-content">{comment.content}</div>
                        </div>
                          <br/>
                          <AddCommentContainer postId={comment.postId}
                                               parentId={comment.id}
                                               replyName="Reply"/>
                        <br/>
                      </div>


  if (comment.Children.length === 0) {
    return (
      <div>
        {singleComment}
      </div>
    );
  } else {
    //build the component, then return the whole thing.
    return (
      <div>
          {singleComment}
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
