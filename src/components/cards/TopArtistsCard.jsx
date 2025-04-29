import React from "react";
import { motion } from "framer-motion";
import SpotifyLogo from "../SpotifyLogo";

/**
 * Expected `data` shape:
 * {
 *   title: string,
 *   totalProjects: number,
 *   projects: Array<{
 *     name: string,
 *     image: string,
 *     completions: number
 *   }>
 * }
 */

const TopArtistsCard = ({ data }) => {
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
    switch (data.color) {
      case "green":
        return "linear-gradient(45deg, #1DB954 0%, #006450 100%)";
      case "pink":
        return "linear-gradient(45deg, #d5232c 0%, #e6007e 100%)";
      case "yellow":
        return "linear-gradient(45deg, #FFD700 0%, #FFA500 100%)";
      case "blue":
        return "linear-gradient(45deg, #1E3264 0%, #2D46B9 100%)";
      case "teal":
        return "linear-gradient(45deg, #006450 0%, #1DB954 100%)";
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
              id="diamond-pattern"
              patternUnits="userSpaceOnUse"
              width="50"
              height="50"
              patternTransform="rotate(45)"
            >
              <path
                d="M25,0 L50,25 L25,50 L0,25 Z"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
        </svg>
      </div>

      <div className="flex flex-col h-full p-8 text-white relative z-10">
        <motion.div
          className="mb-4 flex items-center"
          initial="hidden"
          animate="visible"
          variants={headerAnimation}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-700 mr-4">
            <img
              src={data.userImage}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm opacity-80 mb-1">Your Top</div>
            <h2 className="font-bold text-xl uppercase">Projects</h2>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="flex flex-col gap-3">
            {Array.isArray(data.projects) &&
              data.projects.slice(0, 5).map((project, idx) => (
                <motion.div key={idx} variants={item}>
                  <div className="text-sm font-medium">
                    {idx + 1}. {project.name}
                  </div>
                </motion.div>
              ))}
          </div>
          <div className="flex flex-col gap-3">
            {Array.isArray(data.projects) &&
              data.projects.slice(5, 10).map((project, idx) => (
                <motion.div key={idx} variants={item}>
                  <div className="text-sm font-medium">
                    {idx + 6}. {project.name}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        <div className="mt-auto flex justify-between items-center">
          {/* <SpotifyLogo /> */}
          <span className="text-3xl font-bold">
            {data.totalProjects?.toLocaleString?.() || "0"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopArtistsCard;
