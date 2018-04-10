import { connect } from 'react-redux';
import Accounts from '../../components/accounts/accounts.js';

const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts
  }
}

const accountList = connect(mapStateToProps)(Accounts)

export default accountList
