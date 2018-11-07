import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import axios from 'axios';
import 'antd/dist/antd.css';

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunk
		)
	);

//You have to use the API Key made here, because this allows CORS
//Instead of doing axios.get
//Do RestDBAxios.get() instead to get what you want
//Make sure to import it in though
export const RestDBAxios = axios.create({
	baseURL: 'https://petest-9f02.restdb.io/rest/', //PS Exp - Replace this with your unique RestDB URL
	headers: {
		"x-apikey": "5ad6732125a622ae4d5283ab", 
	},
	responseType: 'json',
});


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
