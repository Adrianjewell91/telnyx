import { connect } from 'react-redux';
import PostAndComments from './post_and_comments';

import {requestPost} from '../../../actions/posts_actions';
import {requestSearchedPosts} from '../../../actions/posts_actions';

const mapStateToProps = (state) => ({
  post: state.entities.posts[0]
});

const mapDispatchToProps = (dispatch) => ({
  requestPost: (id) => dispatch(requestPost(id)),
  requestSearchedPosts: (query) => dispatch(requestSearchedPosts(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAndComments);
