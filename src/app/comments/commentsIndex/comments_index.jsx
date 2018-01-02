import React from 'react';

import {CommentShowComponent} from './comment_show';
import AddCommentContainer from '../addComment/add_comment_container';

class CommentsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestComments(this.props.slugs[this.props.match.params.slug]);
  }

  componentWillReceiveProps(newProps) {
    if( newProps.match.params.slug !== this.props.match.params.slug ) {
      this.props.requestComments(this.props.slugs[newProps.match.params.slug]);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="comments-index-div">
        <h3>Post a Comment</h3>
        <AddCommentContainer postId={this.props.slugs[this.props.match.params.slug]}
                             parentId={null} replyName="New Thread"/>

                           <h3>Previous Comments:</h3>
        <ul>
          {
            this.props.comments.map((comment) => {
              return <li key={`commentId${comment.id}`}>
                      <CommentShowComponent comment={comment}/>
                     </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default CommentsIndex;
