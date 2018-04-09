import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import './stylesheets/index.css';
import storeFactory from './store'
//import {addPost, fetchPostsIfNeeded} from './store/ManagePosts/actions'
//import {fetchTopicsIfNeeded} from './store/ManageTopics/actions'
import registerServiceWorker from './registerServiceWorker';

//const saveState = () =>
    //localStorage["redux-store"] = JSON.stringify(store.getState())

    const initialState = {
        visibilityFilter: 'SHOW_ALL',
        currentPostId: -1,
        posts: {
            isFetching: false,
            items: []
        },
        topics: {
            isFetching: false,
            items: []
        }
    }

const store = storeFactory(initialState);

//save store to local storage upon changes for now
//store.subscribe(saveState)

// Log the initial state
console.log(`
    initial state
    ${JSON.stringify(store.getState())}
`)

const unsubscribe = store.subscribe(() =>
  console.log(`
      updated state
      ${JSON.stringify(store.getState())}
      `)
)

//store.dispatch(fetchTopicsIfNeeded())

//store.dispatch(addPost(4, "title", "author", 3, false, "text", "this is content"))

unsubscribe()

ReactDOM.render(
    <Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
