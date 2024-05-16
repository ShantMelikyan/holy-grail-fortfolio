"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  delay?: number; // Add delay as an optional prop
}

export const Reveal = ({ children, delay = 0.3 }: Props) => { // Set default delay to 0.3
  const ref = useRef(null);
  const isinView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isinView) {
      mainControls.start("visible");
    }
  }, [isinView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.7,
          delay: delay, // Use the delay prop here
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
