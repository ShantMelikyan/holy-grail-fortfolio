"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
}
export const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isinView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isinView) {
        mainControls.start("visible");
    }
  }, [isinView]);

  return (
    <div ref={ref} className="relative ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.4,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
