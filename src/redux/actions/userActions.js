import axios from 'axios';

export const loginUser = (tokenResponse) => async (dispatch) => {
  try {
    const idToken = tokenResponse.access_token;
    const response = await axios.post('http://localhost:5000/auth/google', {
      token: idToken
    });

    dispatch({
      type: 'LOGIN_USER',
      payload: response.data.user,
    });
  } catch (error) {
    console.error('Error during Google login:', error);
  }
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};
