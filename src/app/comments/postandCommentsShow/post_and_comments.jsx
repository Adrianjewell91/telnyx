import React from 'react';
import PropTypes from 'prop-types';

//I want to put the post, then the comments, and then the add-Comment-button.
import {PostShowComponent} from "../../posts/postShow/post_show_component";
import CommentsIndex from "../commentsIndex/comments_index";
import AddComment from "../addComment/add_comment";

class PostAndComments extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props);
    //If the posts contain the right post.
    if (this.props.slugs[this.props.match.params.slug]) {
      this.props.receivePost(this.props.posts[this.props.slugs[this.props.match.params.slug]]);
    } else {
      console.log('searching');
      //if the search results don't return it, then it doesn't exist.
      this.props.requestSearchedPosts(this.props.match.params.slug);
    }
    //if so, then pass an action creator with that specific one, and then
    //get the comments for it.
    //else search from the slug and select the right one. Else
    //put that it's not here.
  }

  render() {
    const post = this.props.posts[this.props.slugs[this.props.match.params.slug]]
                  || {slug: "", title: "", author: "", publish_date: "", content: "Sorry! This doesn't exist."};

    //only render comment functions if the post[id] !== undefined.
    const commentFeatures = (post.id !== undefined) ? <div>
                                                        <CommentsIndex/>
                                                        <AddComment/>
                                                      </div> : <div></div>
    return (
      <div className="post-show-div">
        <h1>Post and Comments</h1>
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
