import { connect } from 'react-redux';
import Contacts from '../../components/contacts/contacts.js';
import { seeAccountDetails } from '../../actions/index.js';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    contactList: state.ContactReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAccountClick: dispatch(seeAccountDetails('12'))
  }
}


const FinalContacts = withRouter(connect(mapStateToProps, mapDispatchToProps)(Contacts));


export default FinalContacts;
