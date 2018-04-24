const DetailsInformationReducer = (state = {
  quickInfo: [{
    name: {
      first: '',
      last: ''
    },
    picture: '',
    location: '',
    cell: ''
  }],
  additionalInfo: {},
  loading: true,
  pic: {}
},action) => {
  switch(action.type) {
    case 'REQUEST_DETAILS_DATA':
      return Object.assign({}, state, {
        loading: action.loading
      })
    case 'RECEIVED_DETAILS_DATA':
      return Object.assign({}, state, {
        quickInfo: action.json,
        additionalInfo: action.json,
        loading: action.loading,
      })
    default:
      return state
  }
}

export default DetailsInformationReducer;
