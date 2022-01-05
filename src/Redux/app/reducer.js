
const initialState = {
    data: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "GET_DATA": {
        return {
          ...state,
          data: action.payload.data,
        };
      }
      default:
        return state;
    }
  }
  
  export default reducer;