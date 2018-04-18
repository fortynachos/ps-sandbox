let initialAccount = [
  {
    key: '1',
    name: 'P Sherman',
    rep: 32,
    territory: '42 Wallaby Way, Sydney',
  }
]

const accountReducer = (
  state = {
    loading: false,
    accounts: initialAccount
  },
 action
 ) => {
	switch (action.type) {
    case 'REQUEST_ACCOUNTS_DATA':
      return Object.assign({}, state, {
        loading: action.loading
      })
    case 'RECEIVED_ACCOUNTS_DATA':
      return Object.assign({}, state, {
        accounts: action.json,
        loading: action.loading
      })
		default:
			return state
	}
}

export default accountReducer;
