import { saveData } from "../../utils/localStorage";


const token = loadData("token") || null;

const initState = {
  isAuth: token !== null,
  token: token
};


function reducer(state = initState, action) {
    switch (action.type) {
      case authConstants.LOGIN_SUCCESS: {
        saveData("token", action.payload.token);
        return {
          ...state,
          isAuth: true,
          token: action.payload.token
        };
      }
      default:
        return state;
    }
  }
  
  export default reducer;
  