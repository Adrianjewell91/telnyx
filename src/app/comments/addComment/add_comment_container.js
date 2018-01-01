import { connect } from 'react-redux';
import AddComment from './add_comment';

import {createComment} from '../../../actions/comments_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
 createComment: (data) => dispatch(createComment(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
