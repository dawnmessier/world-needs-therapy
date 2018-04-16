import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log(`
		original posts: ${store.getState().posts.items.length}
		original topics: ${store.getState().topics.items.length}
	`)
	result = next(action)

	let { posts, topics } = store.getState()
	console.log(`current state: ${JSON.stringify(store.getState())}`);

	console.log(`
		updated posts: ${posts.items.length}
		updated topics: ${topics.items.length}
	`)

	console.groupEnd()

	return result

}

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(rootReducer, initialState)
}
