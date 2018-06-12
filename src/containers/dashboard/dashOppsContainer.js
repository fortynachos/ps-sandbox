import { connect } from 'react-redux';
import ListView from '../../components/dashboard/dashboard-list-view.js';
import { fetchOpportunities } from '../../actions/opportunitiesActions.js';
import { withRouter } from 'react-router-dom';



// This is specifically for the dashboard list view for opportunities
const mapStateToProps = (state) => {
  return {
    opportunitiesList: state.OpportunitiesReducer.opportunities,
    loading: state.OpportunitiesReducer.loading
  }
}

// Fetch Opps thru AJAX request on RESTDBAxios
const mapDispatchToProps = (dispatch) => {
  return {
    onOpportunitiesLoad: () => {
      dispatch(fetchOpportunities());
    }
  }
}


const FinalListView = withRouter(connect(mapStateToProps, mapDispatchToProps)(ListView));


export default FinalListView;
