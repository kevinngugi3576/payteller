"use client";

import Image from "next/image";

import absa from "@/public/logos/absa.svg";
import American from "@/public/logos/American.png";
import ChaseBank from "@/public/logos/ChaseBank.svg";
import equity from "@/public/logos/equity.png";
import google from "@/public/logos/google.png";
import mpesaLogo from "@/public/logos/mpesaLogo.png";
import safLogo from "@/public/logos/safLogo.png";


export function LogoCarouselPage() {
  const logos = [
    { src: absa, alt: "absa" },
    { src: American, alt: "American" },
    { src: ChaseBank, alt: "ChaseBank" },
    { src: equity, alt: "equity" },
    { src: google, alt: "Spark" },
    { src: mpesaLogo, alt: "mpesaLogo " },
    { src: safLogo, alt: "safLogo" },
    
  ];

  return (
    <>
      <main className="flex flex-col justify-center py-2 overflow">
        <div className="w-full max-w-6xl px-4 py-24 mx-auto md:px-6">
          <div className="text-center">
            <ul className="flex items-center space-x-14 animate-infinite-scroll">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <li
                  key={index}
                  className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
                >
                  <div className="relative w-full h-full">
                    <Image src={logo.src} alt={logo.alt} objectFit="contain" />
                  </div>
                </li>
              ))}
            </ul>{" "}
          </div>
        </div>
      </main>
    </>
  );
}
