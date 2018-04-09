import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import {visibilityFilters as FILTER} from '../../store/constants'
import {fetchPostsIfNeeded} from '../../store/ManagePosts/actions'
import List from '../../layouts/PostList/list'
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
