import React from "react";
import { motion } from "framer-motion";

const TotalMinutesCard = ({ data }) => {
  const totalDays = (data.totalTime / 1440).toFixed(2);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

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
        {/* Header */}
        <div className="text-center">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold tracking-wide uppercase mb-2"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            Welcome to Batch25 Farewell
          </motion.h1>
          <motion.h2
            className="text-lg sm:text-3xl font-semibold tracking-wide opacity-90 mt-5"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            Total Time Spent in College
          </motion.h2>
        </div>

        {/* Main Stats Section */}
        <motion.div
          className="mt-8 flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <motion.p className="text-4xl font-bold" variants={itemVariants}>
            {totalDays} Days Spent
          </motion.p> */}
          <motion.p
            className="text-sm  mt-2 opacity-90"
            variants={itemVariants}
          >
            {data.totalLectures} Lectures Attended
          </motion.p>
          <motion.p
            className="text-sm  mt-2 opacity-90"
            variants={itemVariants}
          >
            {data.totalVivas} Vivas Faced
          </motion.p>
          <motion.p
            className="text-sm  mt-2 opacity-90"
            variants={itemVariants}
          >
            {data.totalSubmissions} Assignments Written
          </motion.p>
          <motion.p
            className="text-sm  mt-2 opacity-90"
            variants={itemVariants}
          >
            {data.totalProjects} Projects (Definitely Not Copied)
          </motion.p>
          {/* <motion.p className="text-sm mt-2 opacity-70" variants={itemVariants}>
            Attendance: {data.attendancePercentage}%
          </motion.p> */}
        </motion.div>

        {/* Footer */}
        <div className="w-full flex justify-between items-center mt-auto text-xs opacity-70 pt-6">
          <span>Engineered in: {data.country}</span>
          <span>#EngineeringLife</span>
        </div>
      </div>
    </div>
  );
};

export default TotalMinutesCard;
