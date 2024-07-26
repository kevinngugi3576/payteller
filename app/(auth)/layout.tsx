"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const childrenRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      childrenRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="flex items-center" ref={childrenRef}>
      {children}
      <div className="w-full max-xl:hidden mt-56  mb-16 border-1 rounded-lg flex justify-center">
        <div className="">
          <Image
            src="/icons/sign-up-layout.png"
            alt="Sign up layout"
            width={1000}
            height={1440}
            className="shadow-lg shadow-black-900 rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
