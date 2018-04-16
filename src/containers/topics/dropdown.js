import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropdown from '../../layouts/topics/dropdown';
import { withRouter } from 'react-router';
import {fetchTopicsIfNeeded, setVisibilityFilter} from '../../store/topics/actions'

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
