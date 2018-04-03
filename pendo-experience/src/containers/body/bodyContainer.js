import { connect } from 'react-redux';
import Body from '../../components/body/body.js';


const mapStateToProps = (state) => {
	return {
		title: state.Navigation
	}
}


const FinalBody = connect(mapStateToProps)(Body);
export default FinalBody;