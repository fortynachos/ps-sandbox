import { connect } from 'react-redux';
import Body from '../../components/body/body.js';
import { withRouter } from 'react-router-dom';
import {
	newDetailsData
} from '../../actions/detailActions.js';


const mapStateToProps = (state) => {
	return {
		title: state.Navigation
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onNewObject: (objectType, name, address, phone) => {
			dispatch(newDetailsData(objectType,name,address,phone));
		}
	}
}

const FinalBody = withRouter(connect(mapStateToProps, mapDispatchToProps)(Body));
export default FinalBody;
