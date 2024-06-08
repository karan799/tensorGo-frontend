const initialBillingState = {
  addCount: 0,
  deleteCount: 0,
  editCount: 0,
};

 const  billingReducer = (state = initialBillingState, action) => {
  switch (action.type) {
    case 'UPDATE_BILLING_STATE':
      switch (action.actionType) {
        case 'add':
          return { ...state, addCount: state.addCount + 1 };
        case 'delete':
          return { ...state, deleteCount: state.deleteCount + 1 };
        case 'edit':
          return { ...state, editCount: state.editCount + 1 };
        default:
          return state;
      }
    default:
      return state;
  }
};
export default billingReducer