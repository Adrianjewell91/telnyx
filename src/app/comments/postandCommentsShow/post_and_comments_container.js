import { connect } from 'react-redux';
import PostAndComments from './post_and_comments';

import {receivePost,
        requestSearchedPosts,
        requestPost} from '../../../actions/posts_actions';

const mapStateToProps = (state) => ({
  posts: state.entities.posts.formattedPosts,
  slugs: state.entities.posts.slugs
});

const mapDispatchToProps = (dispatch) => ({
  requestPost: (id) => dispatch(requestPost(id)),
  requestSearchedPosts: (query) => dispatch(requestSearchedPosts(query)),
  receivePost: (post) => dispatch(receivePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAndComments);
