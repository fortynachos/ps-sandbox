import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

import 'antd/dist/antd.css';
import '../node_modules/react-vis/dist/style.css';

const client = axios.create({
	baseURL: 'https://hacker-news.firebaseio.com/v0',
	responseType: 'json'
})

const store = createStore(
	rootReducer,
	applyMiddleware(
		logger,
		axiosMiddleware(client),
		thunk
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
