"use client";

import Landing from "@/components/Landing";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/sign-in");
  };

  const handleGetStartedClick = () => {
    router.push("/sign-up");
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
        <div className="min-h-screen bg-white ">
          {/* Header */}
          <header className="fixed flex items-center w-full backdrop-blur-xl">
            <div className="flex w-1/3 px-4 py-6">
              <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="log app"
              />
              <h1 className="text-2xl font-bold">Payteller</h1>
            </div>
            <div className="w-1/2 ">
              <nav className="space-x-4  font-bold rounded-full   text-xl text-black-1 p-[8px]">
                <a href="#features" className=" hover:text-gray-800">
                  Features
                </a>
                <a href="#pricing" className=" hover:text-gray-800">
                  Pricing
                </a>
                <a href="#testimonials" className="">
                  Testimonials
                </a>
                <a href="#faq" className=" hover:text-gray-800">
                  FAQ
                </a>
              </nav>
            </div>

            <div className="hidden ml-9 md:block ">
              
              <button
                className="bg-blue-700 p-[12px] px-8 rounded-lg text-white text-xl"
                onClick={handleLoginClick}
              >
                Sign in
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="py-48 ">
            <div className="container mx-auto text-center">
              <h2 className="mb-4 text-6xl font-bold ">Welcome to Payteller</h2>
              <p className="mb-8 font-bold">
                The number one payment solution for your business
              </p>
              <Suspense fallback={<Landing />}>
                <button
                  className="bg-blue-700 p-[12px] px-8 rounded-lg text-white text-xl"
                  onClick={handleGetStartedClick}
                >
                  Get started here!
                </button>
              </Suspense>
              <button className="px-8 py-3 ml-4 text-blue-600 bg-gray-200 rounded hover:bg-gray-300">
                Use this template
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20">
            <div className="container mx-auto text-center">
              <h2 className="mb-8 text-3xl font-bold">
                Why choose our service?
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Easy to use",
                    description:
                      "Id laborum laboris duis nostrud excepteur ut velit nulla magna Lorem proident non.",
                  },
                  {
                    title: "Reliable",
                    description:
                      "Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.",
                  },
                  {
                    title: "Secure",
                    description:
                      "Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco.",
                  },
                  {
                    title: "Fast",
                    description:
                      "Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod sint aliquip nisi voluptate.",
                  },
                  {
                    title: "Affordable",
                    description:
                      "Reprehenderit fugiat elit in do ipsum ut pariatur.",
                  },
                  {
                    title: "Scalable",
                    description:
                      "Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.",
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 bg-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="mb-8 text-3xl font-bold">A plan for every need</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Basic",
                    price: "$9.99",
                    features: [
                      "1 GB Storage",
                      "1 Email Account",
                      "1 Domain",
                      "1 Website",
                      "1 Database",
                      "1 SSL Certificate",
                      "1 Support Ticket",
                    ],
                  },
                  {
                    title: "Standard",
                    price: "$19.99",
                    features: [
                      "10 GB Storage",
                      "10 Email Accounts",
                      "10 Domains",
                      "10 Websites",
                      "10 Databases",
                      "10 SSL Certificates",
                      "10 Support Tickets",
                    ],
                  },
                  {
                    title: "Premium",
                    price: "$29.99",
                    features: [
                      "100 GB Storage",
                      "100 Email Accounts",
                      "100 Domains",
                      "100 Websites",
                      "100 Databases",
                      "100 SSL Certificates",
                      "100 Support Tickets",
                    ],
                  },
                ].map((plan, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="mb-4 text-2xl font-bold">{plan.title}</h3>
                    <p className="mb-4 text-xl font-bold">{plan.price}</p>
                    <ul className="mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="px-8 py-3 text-white bg-blue-600 rounded hover:bg-blue-700">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-20">
            <div className="container mx-auto text-center">
              <h2 className="mb-8 text-3xl font-bold">
                What our customers are saying
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  {
                    name: "Rose Roberson",
                    feedback:
                      "Proident sunt exercitation minim laborum enim laboris labore esse. Nostrud tempor sunt fugiat.",
                    title: "CEO at Company",
                  },
                  {
                    name: "Chace Rodgers",
                    feedback:
                      "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
                    title: "CEO at Company",
                  },
                  {
                    name: "Cornelius Sheppard",
                    feedback:
                      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
                    title: "CEO at Company",
                  },
                  {
                    name: "Destinee Woods",
                    feedback:
                      "Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore.",
                    title: "CEO at Company",
                  },
                  {
                    name: "Kaleb Mccormick",
                    feedback:
                      "Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad.",
                    title: "CEO at Company",
                  },
                  {
                    name: "Jazmin Mccall",
                    feedback:
                      "Magna officia quis ea ea in officia non voluptate ipsum culpa do labore sunt.",
                    title: "CEO at Company",
                  },
                ].map((testimonial, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-lg shadow-lg">
                    <p className="mb-4">{testimonial.feedback}</p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 bg-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="mb-8 text-3xl font-bold">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    question: "Is this a secure service?",
                    answer:
                      "Qui sunt nostrud aliquip reprehenderit enim proident veniam magna aliquip velit occaecat eiusmod nisi deserunt sunt.",
                  },
                  {
                    question: "How can I cancel my subscription?",
                    answer:
                      "Reprehenderit fugiat elit in do ipsum ut pariatur. Lorem deserunt et eiusmod.",
                  },
                  {
                    question: "How does the free trial work?",
                    answer:
                      "Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco.",
                  },
                  {
                    question: "Can I switch plans later?",
                    answer:
                      "Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.",
                  },
                  {
                    question: "Do you offer refunds?",
                    answer:
                      "Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.",
                  },
                  {
                    question: "Do you offer support?",
                    answer:
                      "Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.",
                  },
                ].map((faq, idx) => (
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
              <p>Made with Nuxt UI Pro</p>
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
              <p>© 2023 Nuxt UI Pro. All rights reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </Suspense>
  );
}
