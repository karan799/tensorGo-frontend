import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to TensorGo Billing System</h1>
      <Link to="/login">Login with Google</Link>
    </div>
  );
};

export default Home;
