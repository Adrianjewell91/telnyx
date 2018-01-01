import React from 'react';
import PropTypes from 'prop-types';

//I want to put the post, then the comments, and then the add-Comment-button.
import PostShowContainer from "../../posts/postShow/post_show_component";

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
    return (
      <div className="post-show-div">
        <h1>Post and Comments</h1>
      </div>
    )
  }
}

PostAndComments.propTypes = {
  posts: PropTypes.object
}

export default PostAndComments;
