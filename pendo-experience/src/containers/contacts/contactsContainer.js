import { connect } from 'react-redux';
import Contacts from '../../components/contacts/contacts.js';
import { fetchContacts } from '../../actions/contactActions.js';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state) => {
  return {
    contactList: state.ContactReducer.contacts,
    loading: state.ContactReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onContactsRequest: () => {
      dispatch(fetchContacts());
    }
  }
}


const FinalContacts = withRouter(connect(mapStateToProps, mapDispatchToProps)(Contacts));


export default FinalContacts;
