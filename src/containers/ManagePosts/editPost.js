import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import EditPost from '../../layouts/ManagePosts/editPost';

function mapStateToProps(state, props) {
  return {
      topics: state.topics
  }
}

const mapDispatchToProps = dispatch => ({
    onSubmit(e) {
        console.log(e.target);
    }
})

const EditPostContainer = connect(mapStateToProps, mapDispatchToProps)(EditPost);

export default withRouter(EditPostContainer);
