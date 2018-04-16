import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import {fetchPostsIfNeeded} from '../../store/posts/actions'
import List from '../../layouts/posts/list'
import {filterPosts} from '../../helpers/filters'

function mapStateToProps(state, props) {
  return {
      posts: {
          isFetching: state.posts.isFetching,
          items: filterPosts(state.posts.items, state.visibilityFilter)
      }
  };
}

const mapDispatchToProps = dispatch => ({
  fetchPostsIfNeeded: bindActionCreators(fetchPostsIfNeeded, dispatch)
})

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default withRouter(ListContainer);
