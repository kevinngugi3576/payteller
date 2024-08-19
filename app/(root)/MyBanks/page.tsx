
"use client"
import Landing from "@/components/Landing";
import React, { Suspense, useEffect, useState } from "react";

const MyBanks = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [loading]);

  return (
    <Suspense fallback={<Landing />}>
      {loading ? <Landing /> : <Landing />}
    </Suspense>
  );
};

export default MyBanks;

