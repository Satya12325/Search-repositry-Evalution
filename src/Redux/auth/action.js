

export const loginSuccess = (Auth) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      isAuth: Auth
    }
  };
};
