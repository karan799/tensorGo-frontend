import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Invoice = () => {
  const dispatch=useDispatch();
  const generateInvoice = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/billing/generate');
      alert(`Invoice generated: ${res.data.invoiceId}, Amount: ${res.data.amount}`);
    } catch (error) {
      console.error('Failed to generate invoice', error);
    }
  };

  return (
    <div>
      <button onClick={()=>dispatch(generateInvoice)}>Generate Invoice</button>
    </div>
  );
};

export default Invoice;
