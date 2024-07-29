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
        className="max-w-4xl mx-auto text-2xl font-bold leading-relaxed text-center backdrop-blur-lgpx-4 md:text-4xl lg:text-5xl lg:leading-snug "
      >
        
        <Highlight className="text-black dark:text-white">
        Welcome to Payteller
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
