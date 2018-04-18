import { connect } from 'react-redux';
import Body from '../../components/body/body.js';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
	return {
		title: state.Navigation
	}
}


const FinalBody = withRouter(connect(mapStateToProps, null)(Body));
export default FinalBody;
