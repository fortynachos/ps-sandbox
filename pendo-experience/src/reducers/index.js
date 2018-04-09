import Navigation from './navigation';
import TimelineReducer from './timeline';
import accountReducer from './accounts';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	Navigation,
	TimelineReducer,
	accountReducer
});

export default rootReducer;
