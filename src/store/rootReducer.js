import {combineReducers} from 'redux'
import {constants as C, visibilityFilters} from './constants'
import {simpleDate} from '../helpers/date'

//TODO: pull author from authentication info and remove input from form

const { SHOW_ALL } = visibilityFilters

const currentPostId = (state=null, action) => {
    let newId
    switch (action.type) {
        case C.INCREMENT:
            newId = state.currentPostId + 1
            return [
                ...state,
                newId
            ]
        case C.DECREMENT:
            newId = state.currentPostId - 1
            return [
                ...state,
                newId
            ]
        default:
            return state
    }
}

const newPost = (state=null, action) => {
    if(action.type === C.ADD_POST) {
        //TODO: find another way to do new Ids

        let date = simpleDate(new Date())
        action.payload.createdAt = date
        return action.payload
    } else {
        return state
    }
}

const newTopic = (state=null, action) =>
    (action.type === C.ADD_TOPIC) ? action.payload : state

export const visibilityFilter = (state=SHOW_ALL, action) => {
  switch (action.type) {
    case C.SET_VISIBILITY_FILTER:
        return action.filter
    default:
      return state
  }
}

export const topics = (state = [], action) => {
  switch (action.type) {
      case C.REQUEST_TOPICS:
          return {
              ...state,
              isFetching: true
          }
      case C.RECEIVE_TOPICS:
          return {
              ...state,
              items: [
                  ...state.items,
                  ...action.payload
              ]
          }
        case C.COMPLETE_TOPICS:
          return {
              ...state,
              isFetching: false
          }
    case C.ADD_TOPIC:
        return {
            ...state,
            items: [
                ...state.items,
                {...newTopic(null, action)}
            ]
        }
    case C.UPDATE_TOPIC:
        return {
            ...state,
            items: [
                ...state.items,
                {...newTopic(null, action)}
            ]
        }
    case C.REMOVE_TOPIC:
        return state.items.filter(topic => topic.id !== action.id)
    default:
      return state
  }
}

export const posts = (state=[], action) => {
    switch(action.type) {
        case C.REQUEST_POSTS:
            return {
                ...state,
                isFetching: true
            }
        case C.RECEIVE_POSTS:
            return {
                ...state,
                items: [
                    ...state.items,
                    ...action.payload
                ]
            }
        case C.COMPLETE_POSTS:
            return {
                ...state,
                isFetching: false
            }
        case C.ADD_POST:
            return {
                ...state,
                items: [
                    ...state.items,
                    {...newPost(null, action)}
                ]
            }
        case C.UPDATE_POST:
            return {
                ...state,
                items: [
                    ...state.items,
                    {...newPost(null, action)}
                ]
            }
        case C.REMOVE_POST:
            return state.items.filter(post => post.id !== action.id)
        default:
            return state
    }
}

const rootReducer = combineReducers({
    visibilityFilter,
    posts,
    topics,
    currentPostId
})

export default rootReducer
