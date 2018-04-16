import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/app';
import './stylesheets/index.css';
import storeFactory from './store'
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    visibilityFilter: 'SHOW_ALL',
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

// Log the initial state
console.log(`
    initial state
    ${JSON.stringify(store.getState())}
`)

//Register state updates for debugging
const unsubscribe = store.subscribe(() =>
  console.log(`
      updated state
      ${JSON.stringify(store.getState())}
      `)
)

unsubscribe()

ReactDOM.render(
    <Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
