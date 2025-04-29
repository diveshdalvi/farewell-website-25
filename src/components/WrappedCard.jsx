import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WrappedCard = ({ children, direction, isActive }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [children]);

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="w-full relative">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={key}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WrappedCard;
