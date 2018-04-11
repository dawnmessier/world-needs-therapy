import {constants as C} from '../constants'
import {fetchPostsApi} from './endpoints'

function receivePosts(json) {
    return {
        type: C.RECEIVE_POSTS,
        payload: json
    }
}

const fetchPosts = () => (dispatch) => {
    dispatch({type: C.REQUEST_POSTS})

    return fetchPostsApi
    .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad Posts response from server");
        }
        return res.json();
    })
    .then(json => dispatch(receivePosts(json)))
    .then(res => dispatch({type: C.COMPLETE_POSTS}))
    .catch(err => console.log(err))
}

function shouldFetchPosts(state) {
    const posts = state.posts
    if(posts.items.length === 0){
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return false
    }
}

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
    if(shouldFetchPosts(getState())){
        return dispatch(fetchPosts())
    } else {
        return Promise.resolve()
    }
}

export const addPost = (id, title, author, topicId, anonymous=false, contentType='text', content='', statusId=1) => {
    //let newId = dispatch({type: C.INCREMENT})
    return {
        type: C.ADD_POST,
    	payload: {id, title, author, topicId, anonymous, contentType, content, statusId}
    }
}

export const updatePost = (title, author, topicId, anonymous=false, contentType='text', content='', statusId=1) => ({
	type: C.UPDATE_POST,
	payload: {title, author, topicId, anonymous, contentType, content, statusId}
})

export const removePost = (id) => ({
	type: C.REMOVE_POST,
	payload: id
})

export const increment = () => ({
    type: C.INCREMENT
})

export const decrement = () => ({
    type: C.DECREMENT
})

export function setVisibilityFilter(filter) {
  return {
      type: C.SET_VISIBILITY_FILTER,
      filter
  }
}
