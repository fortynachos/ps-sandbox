import { connect } from 'react-redux';
import Details from '../../components/details/details.js';
import {
	updateDetailsInputValue,
	addPostToTimeline,
	requestDetailsData,
	fetchDetails
} from '../../actions/detailActions.js';
import { changePageTitle } from '../../actions';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state) => {
	return {
		inputValue: state.TimelineReducer.inputValue,
		timelinePosts: state.TimelineReducer.timelinePosts,
		info: state.DetailsInformationReducer.info,
		loading: state.DetailsInformationReducer.loading,
	}
};


const mapDispatchToProps = (dispatch) => {
	return {
		onDetailsChange: (text) => {
			dispatch(updateDetailsInputValue(text));
		},
		onDetailsSubmit: (icon, text) => {
			dispatch(addPostToTimeline(icon, text));
		},
		onDetailsRequest: (url) => {
			dispatch(requestDetailsData(url));
		},
		onDetailsLoad: (url) => {
			dispatch(fetchDetails(url));
		},
		onTitleChange: (text) => {
			dispatch(changePageTitle(text));
		}
	}
};


const FinalDetails = withRouter(connect(mapStateToProps,mapDispatchToProps)(Details));

export default FinalDetails;
