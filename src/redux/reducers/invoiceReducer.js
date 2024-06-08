const initialState = {
    invoices: [],
    invoice: null,
  };
  
  const invoiceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_INVOICES':
        return {
          ...state,
          invoices: action.payload,
        };
      case 'GENERATE_INVOICE':
        return {
          ...state,
          invoices: [...state.invoices, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default invoiceReducer;
  