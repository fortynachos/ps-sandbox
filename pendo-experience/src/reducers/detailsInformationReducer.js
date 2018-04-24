const DetailsInformationReducer = (state = {
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
        loading: action.loading
      })
    case 'RECEIVED_DETAILS_DATA':
      return Object.assign({}, state, {
        info: action.json,
        loading: action.loading,
      })
    default:
      return state
  }
}

export default DetailsInformationReducer;
