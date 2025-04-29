import React from "react";
import { motion } from "framer-motion";
import SpotifyLogo from "../SpotifyLogo";

/**
 * Expected `data` shape:
 * {
 *   title: string,
 *   minutes: number,
 *   artists: Array<{
 *     name: string,
 *     image: string,
 *     plays: number
 *   }>
 * }
 */

const TopArtistsFeaturedCard = ({ data }) => {
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

  const artistAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const backgroundStyle = {
    backgroundImage: "linear-gradient(135deg, #FF5722 0%, #FF9800 100%)",
  };

  return (
    <div
      className="relative w-full aspect-[9/16] overflow-hidden rounded-lg"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonal-lines"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="20"
                x2="40"
                y2="20"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      <div className="flex flex-col h-full p-8 text-white relative z-10">
        <motion.div
          className="mb-2"
          initial="hidden"
          animate="visible"
          variants={headerAnimation}
        >
          <p className="text-sm opacity-80 mb-1">My Year With</p>
          <h2 className="font-bold text-3xl">{data.title}</h2>
        </motion.div>

        <div className="flex-grow my-4">
          <div className="space-y-4">
            {data.projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="flex items-center"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={artistAnimation}
              >
                <div className="bg-white/10 w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold mr-2">
                  {idx + 1}
                </div>
                <div className="flex items-center bg-black/20 rounded-full overflow-hidden p-1 pr-4 flex-grow">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-2">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{project.name}</div>
                    <div className="text-xs opacity-80">
                      {project.completions} completions
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center">
          <span className="text-3xl font-bold">
            {data.totalProjects.toLocaleString()} Projects Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopArtistsFeaturedCard;
