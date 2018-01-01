import React from 'react';
import PropTypes from 'prop-types';


class PostAndComments extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {

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
  post: PropTypes.object
}

export default PostAndComments;
