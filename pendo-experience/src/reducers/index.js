import Navigation from './navigation';
import TimelineReducer from './timeline';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	Navigation,
	TimelineReducer
});

export default rootReducer;