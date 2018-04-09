import {constants as C} from '../constants'
//import postData from '../../data/posts.json'
import fetch from 'cross-fetch'

function receivePosts(json) {
    return {
        type: C.RECEIVE_POSTS,
        payload: json
    }
}

const fetchPosts = () => (dispatch) => {
    dispatch({type: C.REQUEST_POSTS})

    return fetch('http://localhost:3333/api/posts')
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
    .then(res => dispatch({type: C.COMPLETE_POSTS}))
}

function shouldFetchPosts(state) {
    const posts = state.posts
    if(posts.items.length === 0){
        return true
    }
    else if (posts.isFetching) {
        return false
    }
}

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
    console.log('fetching posts');
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
