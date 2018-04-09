import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchPostsIfNeeded} from '../../store/ManagePosts/actions'
import {visibilityFilters as FILTER} from '../../store/constants'

class Dropdown extends Component {
    componentDidMount(){
        this.props.dispatch(fetchTopicsIfNeeded())
    }

    render(){
        console.log(`topics props: ${JSON.stringify(this.props)}`);
        let topics = this.props.topics
        if (topics.isFetching) {
          return <p>Loading...</p>
        }

        let topicsList = topics.items
        let _topic = ''

        return(
            <div>
            <form>
                <label htmlFor="topics">Filter by Topic</label>
                <select id="topics" ref={select => _topic = select} onChange={() => onChange(_topic.value)}>
                  <option key="0">All</option>
                  {topicsList.map((topic, i) =>
                      <option key={i+1} value={topic.id}>{topic.topic}</option>
                  )}
                </select>
            </form>
            </div>
        )
    }
}

//'connect' allows 'dispatch' to be available to component
export default connect()(Dropdown)


import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleQuestionModal, toggleConfirmation } from '../actions/questionActions';
import QuestionModal from '../components/questionModal';

class QuestionPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
    }


    openModal() {
        this.props.toggleQuestionModal(true);
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.props.toggleConfirmation(true);
    }

    render() {
        const { modalIsOpen } = this.props;
        return (
            <div>
                <QuestionModal modalIsOpen={modalIsOpen} openModal={this.openModal} closeModal={this.closeModal}
                afterOpenModal={this.afterOpenModal} />
            </div>
        );
    }
}

QuestionPage.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    toggleQuestionModal: PropTypes.func.isRequired,
    toggleConfirmation: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        modalIsOpen: state.question.modalIsOpen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleQuestionModal: bindActionCreators(toggleQuestionModal, dispatch),
        toggleConfirmation: bindActionCreators(toggleConfirmation, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
