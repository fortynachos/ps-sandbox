let initialAccount = [
  {
    key: '1',
    name: 'John Brown',
    rep: 32,
    territory: 'New York No. 1 Lake Park',
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
    case 'REQUEST_ACCOUNTS':
      return Object.assign({}, state, {
        loading: action.loading
      })
    case 'RECEIVED_ACCOUNTS':
      return Object.assign({}, state, {
        accounts: action.accounts,
        loading: action.loading
      })
		default:
			return state
	}
}

export default accountReducer;
