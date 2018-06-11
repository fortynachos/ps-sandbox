import { connect } from 'react-redux';
import Contacts from '../../components/contacts/contacts.js';
import { fetchContacts } from '../../actions/contactActions.js';
import { withRouter } from 'react-router-dom';


// Get loading boolean and contacts object
const mapStateToProps = (state) => {
  return {
    contactList: state.ContactReducer.contacts,
    loading: state.ContactReducer.loading
  }
}

// AJAX call to RESTDB Axios for Contacts
const mapDispatchToProps = (dispatch) => {
  return {
    onContactsRequest: () => {
      dispatch(fetchContacts());
    }
  }
}


const FinalContacts = withRouter(connect(mapStateToProps, mapDispatchToProps)(Contacts));


export default FinalContacts;
