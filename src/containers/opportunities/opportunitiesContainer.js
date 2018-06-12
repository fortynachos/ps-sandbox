import { connect } from 'react-redux';
import Opportunities from '../../components/opportunities/opportunities.js';
import { fetchOpportunities } from '../../actions/opportunitiesActions.js';
import { withRouter } from 'react-router-dom';


// Gets loading boolean and Opps object
const mapStateToProps = (state) => {
  return {
    opportunitiesList: state.OpportunitiesReducer.opportunities,
    loading: state.OpportunitiesReducer.loading
  }
}

// AJAX request to RESTDBAxios for Opportunities
const mapDispatchToProps = (dispatch) => {
  return {
    onOpportunitiesLoad: () => {
      dispatch(fetchOpportunities());
    }
  }
}


const FinalOpportunities = withRouter(connect(mapStateToProps, mapDispatchToProps)(Opportunities));


export default FinalOpportunities;
