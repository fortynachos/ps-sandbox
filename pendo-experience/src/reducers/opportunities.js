// Placholder, but keep
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
const OpportunitiesReducer = (state = {
  opportunities: initContacts,
  loading: false
}, action) =>  {
    switch (action.type) {
      case "REQUEST_OPPORTUNITIES_DATA":
        return Object.assign({}, state, {
          loading: action.loading
        });
      case "RECEIVED_OPPORTUNITIES_DATA":
        return Object.assign({}, state, {
          loading: action.loading,
          opportunities: action.json
        })
      default:
        return state
    }
}


export default OpportunitiesReducer;
