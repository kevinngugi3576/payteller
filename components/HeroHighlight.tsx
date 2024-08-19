"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/Hero-highlight";

export function HeroHighlights() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="max-w-4xl px-4 py-4 mx-auto text-5xl leading-relaxed text-center rounded-full backdrop-blur-sm lg:flex md:text-4xl lg:text-9xl lg:leading-snug "
      >
        
        <Highlight className="">
        <h1 className="font-extrabold text-pink-600">Welcome to Payteller</h1>
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
