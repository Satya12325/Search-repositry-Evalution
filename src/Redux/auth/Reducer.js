const initialState = {
  isAuth: false
}

function reducer(state = initialState, {type}){
  switch(type){
    case 'LOGIN_SUCCESS': {
      return{
        ...state,
        isAuth: true,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;