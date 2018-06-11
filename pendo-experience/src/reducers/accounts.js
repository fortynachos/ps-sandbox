// Placeholder while the real data gets loaded
let initialAccount = [
  {
    key: '1',
    name: 'P Sherman',
    rep: 32,
    territory: '42 Wallaby Way, Sydney',
  }
];

const accountReducer = (
  //This is how you initialize state
  state = {
    loading: false,
    accounts: initialAccount
  },
 action
 ) => {
	switch (action.type) {
    case 'REQUEST_ACCOUNTS_DATA':
      return Object.assign({}, state, {
        // Basically says loading is true
        loading: action.loading
      })
    case 'RECEIVED_ACCOUNTS_DATA':
      return Object.assign({}, state, {
        // Now the information has been recieved take the json and turn loading -> false
        accounts: action.json,
        loading: action.loading
      })
		default:
			return state
	}
}

export default accountReducer;
