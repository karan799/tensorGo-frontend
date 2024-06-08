import axios from 'axios';

export const generateInvoice = (invoiceData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/invoices/generate', invoiceData);
    dispatch({
      type: 'GENERATE_INVOICE',
      payload: res.data,
    });
  } catch (error) {
    console.error('Failed to generate invoice', error);
  }
};

export const fetchInvoices = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/invoices');
    dispatch({
      type: 'FETCH_INVOICES',
      payload: res.data,
    });
  } catch (error) {
    console.error('Failed to fetch invoices', error);
  }
};
