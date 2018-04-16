import React, {Component} from 'react'
//import { connect } from 'react-redux'
import {visibilityFilters as FILTER} from '../../store/constants'

class Dropdown extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        this.props.fetchTopicsIfNeeded()
    }

    handleChange(value){
        let filter = ''

        switch(parseInt(value, 10)) {
            case 0:
                filter = FILTER.DENIAL
                break
            case 1:
                filter = FILTER.SELF_ESTEEM
                break
            case 2:
                filter = FILTER.COMPLIANCE
                break
            case 3:
                filter = FILTER.CONTROL
                break
            case 4:
                filter = FILTER.AVOIDANCE
                break
            case 5:
                filter = FILTER.ANXIETY
                break
            case 6:
                filter = FILTER.DEPRESSION
                break
            default:
                filter = FILTER.SHOW_ALL
        }

        if (filter) {
			this.props.setVisibilityFilter(filter)
		} else {
			this.props.setVisibilityFilter(FILTER.SHOW_ALL)
		}
    }

    render(){
        let topics = this.props.topics
        let topicsList = topics.items
        let _topic = ''

        return(
            <div>
            <form>
                <label htmlFor="topics">Filter by Topic</label>
                <select id="topics" ref={select => _topic = select} onChange={() => this.handleChange(_topic.value)}>
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

export default Dropdown
