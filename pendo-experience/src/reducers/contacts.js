// More placehodler for fun
let initContacts = [{
  key: '1',
  name: 'P Sherman',
  age: "XX",
  address: '42 Wallaby Way, Sydney',
}, {
  key: '2',
  name: 'P Sherman',
  age: "XX",
  address: '42 Wallaby Way, Sydney',
}, {
  key: '3',
  name: 'P Sherman',
  age: "XX",
  address: '42 Wallaby Way, Sydney',
}];



// Similar to account.js
const ContactReducer = (state = {
  contacts: initContacts,
  loading: false
}, action) =>  {
    switch (action.type) {
      case "REQUEST_CONTACTS_DATA":
        return Object.assign({}, state, {
          loading: action.loading
        });
      case "RECEIVED_CONTACTS_DATA":
        return Object.assign({}, state, {
          loading: action.loading,
          contacts: action.json
        })
      default:
        return state
    }
}


export default ContactReducer;
