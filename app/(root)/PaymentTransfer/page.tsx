// "use client";
// import Landing from "@/components/Landing";
// import React, { Suspense, useEffect, useState } from "react";

// const PaymentTransfer = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // Update the state to false to simulate loading completion
//     }, 1000);

//     return () => clearTimeout(timer); // Clean up the timer
//   }, []); // Empty dependency array ensures the effect runs once on mount

//   return (
//     <Suspense fallback={<Landing />}>
//       {loading ? <Landing /> : <div>Your Payment Transfer Content Here</div>}
//     </Suspense>
//   );
// };

// export default PaymentTransfer;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page