import React from 'react';
import PropTypes from 'prop-types';

import {PostShowComponent} from './post_show_component';

class PostsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestPosts();
  }

  render() {
    return (
      <div className="posts-index-div">
        <h1>All Posts</h1>
        <ul>
          {
            this.props.publish_dates.map((el) => {
              return <PostShowComponent post={this.props.posts[el]}/>
            })
          }
        </ul>
      </div>
    )
  }
}

PostsIndex.propTypes = {
  posts: PropTypes.objects,
  publish_dates: PropTypes.array
}

export default PostsIndex;
