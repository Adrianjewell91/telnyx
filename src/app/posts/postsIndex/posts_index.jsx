import React from 'react';
import PropTypes from 'prop-types';

import {PostShowComponent} from '../postShow/post_show_component';
import { Link } from 'react-router-dom';

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
        <h1>All Posts: Sorted by Date from Newest to Oldest.</h1>
        <ul>
          {
            this.props.publish_dates.map((el) => {
              return <li className="post-li" key={this.props.posts[el[0]].id}>
                        <Link to={`/posts/${this.props.posts[el[0]].slug}`}
                              className='nav-link'>
                          <PostShowComponent post={this.props.posts[el[0]]}
                                             showTitle={true}/>
                        </Link>
                      </li>
            })
          }
        </ul>
      </div>
    )
  }
}

PostsIndex.propTypes = {
  posts: PropTypes.object,
  publish_dates: PropTypes.array
}

export default PostsIndex;
