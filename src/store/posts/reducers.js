import {constants as C} from '../constants'
import {simpleDate} from '../../helpers/date'

//TODO: pull author from authenticated username and remove input from form

const newPost = (state=null, action) => {
    if(action.type === C.ADD_POST) {
        //TODO: generate date from DB create or update
        let date = simpleDate(new Date())
        action.payload.createdAt = date
        return action.payload
    } else {
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
