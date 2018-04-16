import {combineReducers} from 'redux'
import {topics, visibilityFilter} from './topics/reducers'
import {posts} from './posts/reducers'

const rootReducer = combineReducers({
    visibilityFilter,
    posts,
    topics
})

export default rootReducer
