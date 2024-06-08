import React from 'react';
import UsageDetails from '../components/UsageDetails';
import BillingInfo from '../components/BillingInfo';
import Invoice from '../components/Invoice';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <UsageDetails />
      <BillingInfo />
      <Invoice />
    </div>
  );
};

export default Dashboard;
