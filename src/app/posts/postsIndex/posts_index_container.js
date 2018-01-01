import { connect } from 'react-redux';
import PostsIndex from './posts_index';

import {sortPostsByDate} from '../../../selectors/posts_by_date';
import {requestPosts} from '../../../actions/posts_actions';

//I need a list of dates with the id associated with it, and sorted by date

const mapStateToProps = (state) => ({
  posts: state.entities.posts.formattedPosts,
  publish_dates: sortPostsByDate(state.entities.posts.formattedPosts)
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
