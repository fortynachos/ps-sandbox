import { connect } from 'react-redux';
import Navigation from '../../components/navigation/nav.js';
import { changePageTitle } from '../../actions';

const mapDispatchToProps = (dispatch) => {
	return {
		onNavClick: (text) => {
			dispatch(changePageTitle(text));
		}
	}
}


const FinalNavigation = connect(null, mapDispatchToProps)(Navigation);

export default FinalNavigation;