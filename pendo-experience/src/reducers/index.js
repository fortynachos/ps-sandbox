import Navigation from './navigation';
import TimelineReducer from './timeline';
import accountReducer from './accounts';
import { combineReducers } from 'redux';
import PipelineReducer from './pipeline';

const rootReducer = combineReducers({
	Navigation,
	TimelineReducer,
	accountReducer,
	PipelineReducer
});

export default rootReducer;
