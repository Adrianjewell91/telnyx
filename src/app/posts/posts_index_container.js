import { connect } from 'react-redux';
import PostsIndex from './posts_index';

import {requestPosts} from '../../actions/posts_actions';

const mapStateToProps = (state) => ({
  posts: state.entities.posts,
  publish_dates: Object.keys(state.entities.posts).sort()
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
