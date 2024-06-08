// src/components/Login.jsx
import React from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../redux/actions/userActions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log(tokenResponse);
        const idToken = tokenResponse.access_token; // Use id_token if needed
        const response = await axios.post('http://localhost:5000/auth/google', {
          token: idToken,
        });
        const user = response.data.user;
        dispatch(loginUser(user));
        // Set user details in local storage
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('accessToken', idToken);
        console.log('Login Success:', user);
        navigate('/customerList');
      } catch (error) {
        console.error('Error during Google login:', error);
      }
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  const handleLogout = () => {
    googleLogout();
    dispatch(logoutUser());
    // Clear user details from local storage
    localStorage.removeItem('userEmail');
    localStorage.removeItem('accessToken');
    console.log('User logged out');
    navigate('/');
  };

  return (
    <div>
      <button onClick={() => login()}>Sign in with Google 🚀</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
