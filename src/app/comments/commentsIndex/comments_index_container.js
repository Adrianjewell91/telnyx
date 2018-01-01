import { connect } from 'react-redux';

import CommentsIndex from './comments_index';

import {requestComments} from '../../../actions/comments_actions';
import {withRouter} from 'react-router-dom';

import {nestComments} from '../../../selectors/nest_comments';

const mapStateToProps = (state) => ({
  comments: nestComments(state.entities.comments, "id", "parent_id"),
  slugs: state.entities.posts.slugs
});

const mapDispatchToProps = (dispatch) => ({
  requestComments: (postId) => dispatch(requestComments(postId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsIndex));
