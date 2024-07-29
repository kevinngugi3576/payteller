"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Landing from "@/components/Landing";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const childrenRef = useRef<HTMLDivElement | null>(null); // Explicit type for TypeScript
  const [loading, setLoading] = useState(true);

  // Set loading state to false after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  // Run GSAP animation once loading is false
  useEffect(() => {
    if (!loading && childrenRef.current) {
      gsap.fromTo(
        childrenRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 3.5, delay:0, ease: "power3.out" }
      );
    }
  }, [loading]);

  return (
    <Suspense fallback={<Landing />}>
      {loading ? (
        <Landing />
      ) : (
        <main className="flex items-center" ref={childrenRef}>
          {children}
          <div className="flex justify-center w-full mt-8 rounded-lg max-xl:hidden border-1">
            <div className="">
              <Image
                src="/icons/sign-up-layout.png"
                alt="Sign up layout"
                width={1000}
                height={1440}
                className="rounded-lg shadow-lg shadow-black-900"
              />
            </div>
          </div>
        </main>
      )}
    </Suspense>
  );
}
