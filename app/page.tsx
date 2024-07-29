"use client";

import Landing from "@/components/Landing";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { Faqs, featuresData, Plans, Testimonials } from "@/constants";
import { BentoGrids } from "@/components/BentoGrid";
import { Globe } from "@/components/Globe";
import { LogoCarouselPage } from "@/components/Companies";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import Hamburger from "hamburger-react";
import { HeroHighlights } from "@/components/HeroHighlight";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(true);

  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/sign-in");
  };

  const handleGetStartedClick = () => {
    router.push("/sign-up");
  };

  const HandleHamburgerClick = () => {
    setOpen(!isOpen);
  };

  const HandleLinkClick = () => {
    setOpen(!isOpen); // Close the menu when a link is clicked
  };

  useEffect(() => {
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
        <div className="bg-white">
          {/* Header */}

          <header className="fixed top-0 z-30 flex items-center w-full backdrop-blur-xl">
            <div className="flex w-1/3 px-4 py-6 ">
              <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="log app"
              />
              <h1 className="px-2 text-2xl font-bold">Payteller</h1>

              <div className="md:hidden ml-80 ">
                <Hamburger toggled={!isOpen} toggle={HandleHamburgerClick} />
              </div>
            </div>
            <div className={` hidden md:w-1/2 md:block`}>
              <nav className="space-x-4  font-bold rounded-full   text-xl  p-[8px]">
                {/* <div className="flex flex-col h-screen "> */}
                <Link
                  href="#features"
                  className=" hover:text-gray-800"
                  // onClick={HandleLinkClick}
                >
                  Features
                </Link>
                <Link
                  href="#testimonials"
                  className=""
                  // onClick={HandleLinkClick}
                >
                  Testimonials
                </Link>
                <Link
                  href="#faq"
                  className=" hover:text-gray-800"
                  // onClick={HandleLinkClick}
                >
                  FAQ
                </Link>
              </nav>
            </div>

            <div className="hidden lg:flex ml-9 md:block">
              <button
                className="bg-blue-700 md:p-[12px] p-[2px] rounded-lg text-white text-xl"
                onClick={handleLoginClick}
              >
                Sign in
              </button>
            </div>
          </header>

          <div className="relative mt-4 ">
            <video
              autoPlay
              muted
              loop
              preload="none"
              className="object-cover w-full min-h-screen"
            >
              <source src="/videos/landingPage2.mp4" type="video/mp4" />
            </video>
          </div>

          {!isOpen && (
            <div className="absolute inset-0 flex flex-col items-center justify-center h-full md:hidden">
              <nav className="space-x-4  font-bold rounded-full   text-xl  p-[8px]">
                {/* <div className="flex flex-col h-screen "> */}
                <Link
                  href="#features"
                  className=" hover:text-gray-800"
                  onClick={HandleLinkClick}
                >
                  Features
                </Link>
                <Link
                  href="#testimonials"
                  className=""
                  onClick={HandleLinkClick}
                >
                  Testimonials
                </Link>
                <Link
                  href="#faq"
                  className=" hover:text-gray-800"
                  onClick={HandleLinkClick}
                >
                  FAQ
                </Link>
              </nav>
              <div className="">
                <button
                  className="bg-blue-700 md:p-[12px] p-[8px] block rounded-lg text-white text-xl"
                  onClick={handleLoginClick}
                >
                  Sign in
                </button>
              </div>
            </div>
          )}

          {isOpen ? (
            <section className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold lg:text-9xl :">
                <HeroHighlights />{" "}
              </h2>
              <p className="py-2 mb-6 text-lg font-bold text-purple-600 lg:text-4xl">
                The number one payment solution for your business
              </p>

              <button
                className="bg-blue-700 p-[12px] px-8 rounded-lg text-white text-xl backdrop-blur-xl"
                onClick={handleGetStartedClick}
              >
                Get started here!
              </button>
            </section>
          ) : (
            ""
          )}

          {/* Globe section  */}
          <section className="mb-32 shadow-xl ">
            <div className="">
              <Globe />
            </div>
          </section>
          <div className="">
            <LogoCarouselPage />
          </div>

          {/* Features Section */}
          <section id="features" className="mb-16">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold ">Why choose our service?</h2>
              <div className="rounded-lg border-1 border-zinc-950">
                <BentoGrids />
              </div>
            </div>
          </section>

          {/* 
          {/* Testimonials Section */}
          <section id="testimonials" className=" md:py-20">
            <div className="container mx-auto text-center">
              <h2 className="mb-8 text-3xl font-bold">
                What our customers are saying
              </h2>
              <div className="">
                <TestimonialsGrid />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 shadow-2xl">
            <div className="container mx-auto text-center">
              <h2 className="mb-8 text-3xl font-bold">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {Faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="mb-2 text-xl font-bold">{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 text-white bg-gray-800">
            <div className="container mx-auto space-y-4 text-center">
              <p>Payteller</p>
              <div className="space-x-4">
                <a href="#features" className="hover:underline">
                  Features
                </a>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </div>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-1/2 p-2 rounded"
                />
                <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                  Subscribe
                </button>
              </form>
              <p>© 2024 All rights reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </Suspense>
  );
}
