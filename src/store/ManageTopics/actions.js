import {constants as C} from '../constants'
import fetch from 'cross-fetch'

function receiveTopics(json) {
    return {
        type: C.RECEIVE_TOPICS,
        payload: json
    }
}

const fetchTopics = () => (dispatch) => {
    dispatch({type: C.REQUEST_TOPICS})

    return fetch('http://localhost:3333/api/topics')
    .then(response => response.json())
    .then(json => dispatch(receiveTopics(json)))
    .then(res => dispatch({type: C.COMPLETE_TOPICS}))
}

function shouldFetchTopics(state) {
    const topics = state.topics
    if(topics.items.length === 0){
        return true
    }
    else if (topics.isFetching) {
        return false
    }
}

export const fetchTopicsIfNeeded = () => (dispatch, getState) => {
    if(shouldFetchTopics(getState())){
        return dispatch(fetchTopics())
    } else {
        return Promise.resolve()
    }
}

export const addTopic = (id, topic='') => {
    //let newId = dispatch({type: C.INCREMENT})
    return {
        type: C.ADD_TOPIC,
    	payload: {id, topic}
    }
}

export const updateTopic = (topic) => ({
	type: C.UPDATE_TOPIC,
	payload: {topic}
})

export const removeTopic = (id) => ({
	type: C.REMOVE_TOPIC,
	payload: id
})
