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
  const childrenRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      childrenRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0, ease: "power3.out" }
    );
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <Suspense fallback={<Landing />}>
      {loading ? (
        <Landing />
      ) : (
        <main className="flex items-center" ref={childrenRef}>
          {children}
          <div className="flex justify-center w-full mt-56 mb-16 rounded-lg max-xl:hidden border-1">
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
