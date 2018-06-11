import { connect } from 'react-redux';
import Accounts from '../../components/accounts/accounts.js';
import { withRouter } from 'react-router-dom';
import { fetchAccounts  } from '../../actions/accountActions';


// Passing the loading boolean and account object
const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts,
    loading: state.accountReducer.loading
  }
}
// Dispatch AJAX request on RESTDBAxios
const mapDispatchToProps = (dispatch) => {
  return {
    onAccountsLoad: () => {
      dispatch(fetchAccounts());
    }
  }
}


const accountList = withRouter(connect(mapStateToProps,mapDispatchToProps)(Accounts));

export default accountList
