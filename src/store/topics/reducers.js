import {constants as C, visibilityFilters} from '../constants'

const newTopic = (state=null, action) =>
    (action.type === C.ADD_TOPIC) ? action.payload : state

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

const { SHOW_ALL } = visibilityFilters

export const visibilityFilter = (state=SHOW_ALL, action) => {
  switch (action.type) {
    case C.SET_VISIBILITY_FILTER:
        return action.filter
    default:
      return state
  }
}
