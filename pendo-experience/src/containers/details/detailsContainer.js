import { connect } from 'react-redux';
import Details from '../../components/details/details.js';
import { updateDetailsInputValue } from '../../actions';




const mapStateToProps = (state) => {
	return {
		inputValue: state.TimelineReducer
	}
};


const mapDispatchToProps = (dispatch) => {
	return {
		onDetailsSubmit: (text) => {
			dispatch(updateDetailsInputValue(text));
		}
	}
};


const FinalDetails = connect(mapStateToProps,mapDispatchToProps)(Details);

export default FinalDetails;