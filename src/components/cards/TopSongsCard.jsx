import React from "react";
import { motion } from "framer-motion";

/**
 * Generic Data Card component for multiple types:
 * - Supports topProjects, topSubjects, topGoogleSearches, etc.
 */

const DataCard = ({ data }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const headerAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getBackgroundStyle = () => {
    switch (data.type) {
      case "topProjects":
        return "linear-gradient(45deg, #1DB954 0%, #006450 100%)";
      case "topSubjects":
        return "linear-gradient(45deg, #FFD700 0%, #FFA500 100%)";
      case "topGoogleSearches":
        return "linear-gradient(45deg, #d5232c 0%, #e6007e 100%)";
      case "mostVisitedPlaces":
        return "linear-gradient(45deg, #006450 0%, #1DB954 100%)";
      case "mostUsedWords":
        return "linear-gradient(45deg, #1E3264 0%, #2D46B9 100%)";
      case "topGroupMembers":
        return "linear-gradient(45deg, #006450 0%, #FFD700 100%)";
      default:
        return "linear-gradient(45deg, #1DB954 0%, #006450 100%)";
    }
  };

  return (
    <div
      className="relative w-full aspect-[9/16] overflow-hidden rounded-lg"
      style={{ background: getBackgroundStyle() }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circle-pattern"
              patternUnits="userSpaceOnUse"
              width="60"
              height="60"
            >
              <circle
                cx="30"
                cy="30"
                r="20"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circle-pattern)" />
        </svg>
      </div>

      <div className="flex flex-col h-full p-8 text-white relative z-10">
        <motion.div
          className="mb-4"
          initial="hidden"
          animate="visible"
          variants={headerAnimation}
        >
          <h2 className="font-bold text-2xl uppercase">
            {data.title || data.type}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {data.searches &&
            data.searches.map((search, idx) => (
              <motion.div key={idx} variants={item}>
                <div className="text-lg font-medium">
                  {idx + 1}. {search.query}
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Hide if totalTime is not relevant */}
        {data.totalTime && (
          <div className="mt-auto flex justify-between items-center">
            <span className="text-3xl font-bold">
              {Math.floor(data.totalTime / 1440)} days
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataCard;
