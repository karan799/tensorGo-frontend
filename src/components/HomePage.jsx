import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { generateBilling } from '../redux/actions/billingActions';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [apiCalls, setApiCalls] = useState('');

  const handleInputChange = (event) => {
    setApiCalls(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const billing = {
      userId: 1, // This should be dynamic, based on logged-in user
      apiCalls: Number(apiCalls),
      cost: Number(apiCalls) * 1, // Assuming each API call costs 1 rupee
    };
    // dispatch(generateBilling(billing));
    setApiCalls('');
  };

  const handleViewUsage = () => {
    navigate("/usage");
  };

  const handleViewBilling = () => {
    navigate("/billing");
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the Homepage</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="apiCalls" className={styles.label}>
          Number of API Calls:
          <input
            type="number"
            id="apiCalls"
            value={apiCalls}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <div className={styles.actions}>
        <button onClick={handleViewUsage} className={styles.actionButton}>View Usage</button>
        <button onClick={handleViewBilling} className={styles.actionButton}>View Billing</button>
      </div>
      <p>Each API call costs 1 rupee.</p>
    </div>
  );
};

export default HomePage;
