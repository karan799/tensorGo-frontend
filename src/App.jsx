import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UsageDetails from './components/UsageDetails';
// import BillingInfo from './components/BillingInfo';
import HomePage from './components/HomePage';
import store from './redux/store';
import AddCustomerForm from './components/AddCustomerForm';
import CustomerDetails from './components/CustomerDetails';
import CustomerList from './components/CustomerList';
import './styles/App.css'; // Add your global CSS styling here
import { Provider } from 'react-redux';
import UpdateCustomer from './components/UpdateCustomer';


const App = () => {
  const [user, setUser] = useState("null");

  return (
    <Provider store={store}>
   <GoogleOAuthProvider clientId="858325993115-upia70nhrlnf8dsu0tk0b70os5qk9hcq.apps.googleusercontent.com">
     <Router>
      <Routes>
      <Route path="/add-customer" element={<AddCustomerForm />} />
        <Route path="/edit-customer" element={<AddCustomerForm />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
        <Route path="/update-customer/:id" element={<UpdateCustomer />} />
        <Route path="/customerList" element={<CustomerList />} />
        <Route path="/" element={<Login setUser={setUser} />} /> 
        {/* <Route path="/login" element={} /> */}
       <Route path="/home" element={<HomePage user={user} />} />
       <Route path="/usage" element={<UsageDetails/>} />
       {/* <Route path="/billing" element={<BillingInfo/>} /> */}
      </Routes>
    </Router>
    </GoogleOAuthProvider>
    </Provider>
  );
};

export default App;
