import React from 'react';
import PropTypes from 'prop-types';

//I want to put the post, then the comments, and then the add-Comment-button.
import {PostShowComponent} from "../../posts/postShow/post_show_component";
import CommentsIndexContainer from "../commentsIndex/comments_index_container";
import AddComment from "../addComment/add_comment";



class PostAndComments extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {

    if (this.props.slugs[this.props.match.params.slug]) {
      this.props.receivePost(this.props.posts[this.props.slugs[this.props.match.params.slug]]);
    } else {
      this.props.requestSearchedPosts(this.props.match.params.slug);
    }
  }

  componentWillReceiveProps(newProps) {
    if( newProps.match.params.slug !== this.props.match.params.slug ) {
        this.props.requestSearchedPosts(newProps.match.params.slug);
    }
  }

  render() {
    const post = this.props.posts[this.props.slugs[this.props.match.params.slug]]
                  || {slug: "", title: "",
                      author: "", publish_date: "",
                      content: "Sorry! This doesn't exist."};

    //only render comment functions if the post[id] !== undefined.
    const commentFeatures = (post.id !== undefined) ? <div>
                                                        <CommentsIndexContainer/>
                                                      </div> : <div></div>
    return (
      <div className="post-show-div">
        <h1>{post.title} by <span className="author-span">{post.author}</span></h1>
        <PostShowComponent post={post}/>
        {commentFeatures}
      </div>
    )
  }
}

PostAndComments.propTypes = {
  posts: PropTypes.object
}

// PostAndComments.defaultProps = {
//   posts: {1:{content: "Loading"}}
//   slugs: {test }
// }

export default PostAndComments;
