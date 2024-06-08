import axios from 'axios';
import  updateBillingState  from './billingActions';

export const fetchCustomers = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://aarsaartech-4.onrender.com/api/customers`);
    dispatch({ type: 'FETCH_CUSTOMERS', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};



// src/redux/actions/customerActions.js






// Action to fetch a customer by ID
export const getCustomerById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://aarsaartech-4.onrender.com/api/customers/${id}`);
    dispatch({ type: 'FETCH_CUSTOMER_BY_ID', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

 // Import the updateBillingState action creator

export const addCustomer = (customer) => async (dispatch) => {
  try {
    const response = await axios.post(`https://aarsaartech-4.onrender.com/api/customers`, customer);
    dispatch({ type: 'ADD_CUSTOMER', payload: response.data });
    dispatch(updateBillingState('add')); // Dispatch updateBillingState with 'add' action type
  } catch (error) {
    console.log(error);
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    const userEmail = localStorage.getItem('userEmail');
    await axios.delete(`https://aarsaartech-4.onrender.com/api/customers/${id}`, {
      data: { userEmail, actionType: 'delete' },
    });
    dispatch({ type: 'DELETE_CUSTOMER', payload: id });
    dispatch(updateBillingState('delete')); // Dispatch updateBillingState with 'delete' action type
  } catch (error) {
    console.log(error);
  }
};

export const updateCustomer = (id, customerData) => async (dispatch) => {
  try {
    const response = await axios.patch(`https://aarsaartech-4.onrender.com/api/customers/${id}`, customerData);
    dispatch({ type: 'UPDATE_CUSTOMER', payload: response.data });
    dispatch(updateBillingState('edit')); // Dispatch updateBillingState with 'edit' action type
  } catch (error) {
    console.log(error);
  }
};


