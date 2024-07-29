"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";


export function TestimonialsGrid() {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="shadow-xl flex flex-row md:flex-row w-full h-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1]  flex flex-col items-center justify-center"
      >
        <Image
          src="/profile/lady.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="w-20 h-20 rounded-full"
        />
        <p className="mt-4  text-sm md:text-xl  font-semibold text-center sm:text-sm p-[10px]">
          "I've been using PayTeller for over a year now, and I couldn't be
          happier with the service. The platform is incredibly reliable, and
          I’ve never encountered any downtime."
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/profile/lady2.png"
          alt="avatar"
          height="100"
          width="100"
          className="w-20 h-20 rounded-full "
        />
        <p className="mt-4 text-sm md:2xl font-semibold text-center sm:text-sm p-[10px] ">
          "I was looking for an online banking system that could integrate
          seamlessly with my existing financial tools. PayTeller fit the bill
          perfectly. The integration process was straightforward, and the
          support team was always available to assist." 
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1]  flex flex-col items-center justify-center"
      >
        <Image
          src="/profile/man.jpg"
          alt="avatar"
          height={300}
          width={300}
          className="w-20 h-20 rounded-full"
        />
        <p className="mt-4 text-sm md:text-xl font-semibold text-center sm:text-sm p-[10px] ">
          One of the standout features of PayTeller is their customer service.
          The team is always friendly, knowledgeable, and quick to respond to
          any queries or issues I might have." 
        </p>
      </motion.div>
    </motion.div>
  );
}
