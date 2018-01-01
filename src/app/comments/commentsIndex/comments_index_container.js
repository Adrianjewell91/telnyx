import { connect } from 'react-redux';

import CommentsIndex from './comments_index';

import {requestComments} from '../../../actions/comments_actions';
import {withRouter} from 'react-router-dom';

function nestAndSortComments(comments) {
  return comments;
}

const mapStateToProps = (state) => ({
  comments: nestAndSortComments(state.entities.comments),
  slugs: state.entities.posts.slugs
});

const mapDispatchToProps = (dispatch) => ({
  requestComments: (postId) => dispatch(requestComments(postId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsIndex));
