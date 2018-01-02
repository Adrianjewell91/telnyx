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
    return (
      <div className="comments-wrapper">
        <AddCommentContainer postId={this.props.slugs[this.props.match.params.slug]}
          parentId={null} replyName="New Thread"/>
        <br/>
        <h3>Current Threads:</h3>
        <div className="comments-index-div">
          <ul>
            {
              this.props.comments.reverse().map((comment) => {
                return <li key={`commentId${comment.id}`}>
                        <CommentShowComponent comment={comment}/>
                       </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default CommentsIndex;
