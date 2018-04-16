import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import DeletePost from '../../layouts/posts/deletePost';


const mapDispatchToProps = dispatch => ({
    onDelete(id) {
        console.log(id);
    }
})

const DeleteContainer = connect(mapDispatchToProps)(DeletePost);

export default withRouter(DeleteContainer);
