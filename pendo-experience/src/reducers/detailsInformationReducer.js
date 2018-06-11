

const DetailsInformationReducer = (state = {
  // Initializes info object
  info: [{
    name: {
      first: '',
      last: ''
    },
    picture: '',
    location: '',
    cell: ''
  }],
  loading: true,
  pic: {}
},action) => {
  switch(action.type) {
    case 'REQUEST_DETAILS_DATA':
      return Object.assign({}, state, {
        // Loading is true
        loading: action.loading
      })
    case 'RECEIVED_DETAILS_DATA':
      return Object.assign({}, state, {
        // Json object to info object
        // Loading is false
        info: action.json,
        loading: action.loading,
      })
    default:
      return state
  }
}

export default DetailsInformationReducer;
