import React from "react";
import { motion } from "framer-motion";

/**
 * Expected `data` shape:
 * {
 *   totalTime: number, // in minutes
 *   totalSubmissions: number,
 *   totalLectures: number,
 *   totalVivas: number,
 *   totalProjects: number
 * }
 */

const TotalMinutesCard = ({ data }) => {
  const numberAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  // Convert total time to days (assuming 1 day = 24 hours = 1440 minutes)
  const totalDays = (data.totalTime / 1440).toFixed(2);

  return (
    <div
      className="relative w-full aspect-[9/16] overflow-hidden rounded-lg"
      style={{
        background: "linear-gradient(45deg, #d5232c 0%, #e6007e 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="wave-pattern"
              patternUnits="userSpaceOnUse"
              width="200"
              height="200"
              patternTransform="rotate(45)"
            >
              <path
                d="M-50 30 Q0 60 50 30 T150 30"
                stroke="rgba(255,255,255,0.1)"
                fill="none"
                strokeWidth="15"
              />
              <path
                d="M-50 90 Q0 120 50 90 T150 90"
                stroke="rgba(255,255,255,0.1)"
                fill="none"
                strokeWidth="15"
              />
              <path
                d="M-50 150 Q0 180 50 150 T150 150"
                stroke="rgba(255,255,255,0.1)"
                fill="none"
                strokeWidth="15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="flex flex-col items-center justify-between h-full p-8 text-white relative z-10">
        <div className="text-center">
          <motion.p
            className="text-sm uppercase tracking-wider mb-1 opacity-80"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
          >
            Welcome to Batch25 Wrapped
          </motion.p>
          <motion.p
            className="text-lg uppercase tracking-wider font-bold"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
          >
            Total Time Spent in College
          </motion.p>
        </div>

        <motion.div
          className="text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={numberAnimation}
        >
          <span className="text-[100px] font-bold leading-none">
            {totalDays} Days
          </span>
          <p className="text-sm mt-2 opacity-80">
            That's {data.totalSubmissions} submissions, {data.totalLectures}{" "}
            lectures attended, and {data.totalVivas} vivas given.
          </p>
        </motion.div>

        <div className="w-full flex justify-between items-center mt-auto">
          <span className="text-xs opacity-70">
            {data.totalProjects} Projects (Copied Successfully)
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalMinutesCard;
