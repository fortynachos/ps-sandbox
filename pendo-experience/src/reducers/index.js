import Navigation from './navigation';
import TimelineReducer from './timeline';
import { combineReducers } from 'redux';
import PipelineReducer from './pipeline';
import ContactReducer from './contacts';
const rootReducer = combineReducers({
	Navigation,
	TimelineReducer,
	PipelineReducer,
	ContactReducer
});

export default rootReducer;
