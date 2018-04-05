import Navigation from './navigation';
import TimelineReducer from './timeline';
import { combineReducers } from 'redux';
import PipelineReducer from './pipeline';

const rootReducer = combineReducers({
	Navigation,
	TimelineReducer,
	PipelineReducer
});

export default rootReducer;