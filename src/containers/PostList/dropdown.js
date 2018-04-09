import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropdown from '../../layouts/PostList/dropdown';
import { withRouter } from 'react-router';
import {fetchTopicsIfNeeded} from '../../store/ManageTopics/actions'
import {setVisibilityFilter} from '../../store/ManagePosts/actions'

function mapStateToProps(state, props) {
  return {
      topics: state.topics
  }
}

const mapDispatchToProps = (dispatch) => ({
    setVisibilityFilter: bindActionCreators(setVisibilityFilter, dispatch),
    fetchTopicsIfNeeded: bindActionCreators(fetchTopicsIfNeeded, dispatch)
})

const DropdownContainer = connect(mapStateToProps, mapDispatchToProps)(Dropdown);

export default withRouter(DropdownContainer);
