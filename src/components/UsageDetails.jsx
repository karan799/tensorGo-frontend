// UserActionLogs.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserActionLogs.css';
import { generateInvoice } from '../redux/actions/billingActions';

const UserActionLogs = () => {
  const dispatch = useDispatch();
  const billingState = useSelector((state) => state.billing);

  const totalCost = billingState.addCount * 1 + billingState.deleteCount * 1 + billingState.editCount * 2;

  const handleGenerateInvoice = () => {
    const amount = totalCost; // Assuming totalCost is the amount to be sent
    dispatch(generateInvoice(amount)); // Dispatch the generateInvoice action creator
  };

  return (
    <div>
      <h2>Billing Actions</h2>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Count</th>
            <th>Cost (Rs)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add</td>
            <td>{billingState.addCount}</td>
            <td>{billingState.addCount * 1}</td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>{billingState.deleteCount}</td>
            <td>{billingState.deleteCount * 1}</td>
          </tr>
          <tr>
            <td>Edit</td>
            <td>{billingState.editCount}</td>
            <td>{billingState.editCount * 2}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total Cost</td>
            <td>{totalCost}</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={handleGenerateInvoice}>Generate Invoice</button>
    </div>
  );
};

export default UserActionLogs;
