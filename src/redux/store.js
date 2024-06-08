import customerReducer from './reducers/customerReducer';
import billingReducer from './reducers/billingReducer';
import invoiceReducer from './reducers/invoiceReducer';
import userReducer from './reducers/userReducer';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  customer: customerReducer,
  billing: billingReducer,
  invoice: invoiceReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
