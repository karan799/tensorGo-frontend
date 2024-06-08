import axios from "axios";

const updateBillingState = (actionType) => ({
  type: 'UPDATE_BILLING_STATE',
  actionType,
});
export const generateInvoice = (invoiceData) => async (dispatch) => {
  try {
    console.log(invoiceData);
    const res = await axios.post('http://localhost:5000/api/billing/generate', {"amount":invoiceData});
    dispatch({
      type: 'GENERATE_INVOICE',
      payload: res.data,
    });
  } catch (error) {
    console.error('Failed to generate invoice', error);
  }
};


// Billing state reducer
export default updateBillingState;