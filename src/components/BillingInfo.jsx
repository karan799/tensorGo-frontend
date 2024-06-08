// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import Invoice from './Invoice';

// const BillingInfo = () => {
//   const dispatch=useDispatch();
//   const [billing, setBilling] = useState({});

//   useEffect(() => {
//     const fetchBillingInfo = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/billing/1');
//         console.log(res);
//         setBilling(res.data);
//       } catch (error) {
//         console.error('Failed to fetch billing information', error);
//       }
//     };

//     dispatch(fetchBillingInfo);
//   }, []);

//   return (
//     <div>
//       <h1>Billing Information</h1>
//       <p>Current Billing Cycle: {billing.cycle}</p>
//       <p>Cumulative Usage: {billing.usage}</p>
//       <Invoice/>
//       <UserActionLogs/>
//     </div>
//   );
// };

// export default BillingInfo;
