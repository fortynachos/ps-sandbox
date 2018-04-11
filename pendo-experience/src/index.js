import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
<<<<<<< HEAD
import axios from 'axios';
//import axiosMiddleware from 'redux-axios-middleware';
//import thunk from 'redux-thunk';
=======
import thunk from 'redux-thunk';
>>>>>>> 6f40f875402c72bfe13c4a767efae883a8112873
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

import 'antd/dist/antd.css';
import '../node_modules/react-vis/dist/style.css';

<<<<<<< HEAD
// const client = axios.create({
// 	baseURL: 'https://hacker-news.firebaseio.com/v0',
// 	responseType: 'json'
// })

=======
>>>>>>> 6f40f875402c72bfe13c4a767efae883a8112873
const store = createStore(
	rootReducer,
	applyMiddleware(
		logger,
<<<<<<< HEAD
		//axiosMiddleware(client),
		//thunk
=======
		thunk
>>>>>>> 6f40f875402c72bfe13c4a767efae883a8112873
		)
	);



ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
