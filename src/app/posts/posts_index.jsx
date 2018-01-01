import React from 'react';
import PropTypes from 'prop-types';

class PostsIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestPosts();
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="posts-index-div">
        <h1>All Posts</h1>
        <ul>
          {
            this.props.publish_dates.map((el) => {
              return <li>{el} : {this.props.posts[el].content}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

PostsIndex.propTypes = {
  posts: PropTypes.array,
  publish_dates: PropTypes.array
}

export default PostsIndex;
