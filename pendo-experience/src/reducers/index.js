import Navigation from './navigation';
import TimelineReducer from './timeline';
import { combineReducers } from 'redux';
import PipelineReducer from './pipeline';
import ContactReducer from './contacts';
import DetailsInformationReducer from './detailsInformationReducer';

const rootReducer = combineReducers({
	Navigation,
	TimelineReducer,
	PipelineReducer,
	ContactReducer,
	DetailsInformationReducer
});

export default rootReducer;
