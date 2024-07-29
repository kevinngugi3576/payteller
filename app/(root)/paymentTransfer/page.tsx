"use client"
import Landing from "@/components/Landing";
import React, { Suspense, useEffect, useState } from "react";

const PaymentTransfer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(loading);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer
  }, );

  return (
    <Suspense fallback={<Landing />}>
      {loading ? <Landing /> : <Landing />}
    </Suspense>
  );
};

export default PaymentTransfer;
