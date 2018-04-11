import { connect } from 'react-redux';
import Contacts from '../../components/contacts/contacts.js';


const mapStateToProps = (state) => {
  return {
    contactList: state.ContactReducer
  }
}


const FinalContacts = connect(mapStateToProps)(Contacts);


export default FinalContacts;
