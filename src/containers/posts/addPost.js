import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AddPost from '../../layouts/posts/addPost'
import {addPost} from '../../store/posts/actions';

function mapStateToProps(state, props) {
  return {
      topics: state.topics
  }
}

const mapDispatchToProps = dispatch => ({
    onSubmit({id, title, author, topicId, anonymous, contentType, content, statusId}) {
        dispatch(
            addPost(id, title, author, topicId, anonymous, contentType, content, statusId)
        )
        //TODO: redirect back to manage posts list
    }
})

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default withRouter(AddPostContainer);
