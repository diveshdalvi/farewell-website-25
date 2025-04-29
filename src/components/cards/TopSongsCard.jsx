import React from "react";
import { motion } from "framer-motion";
import SpotifyLogo from "../SpotifyLogo"; // You can use this for logos or any icon

/**
 * Expected `data` shape for various card types:
 * - `topProjects`: { title, projects }
 * - `topSubjects`: { title, subjects }
 * - `topGoogleSearches`: { title, searches }
 * - `mostVisitedPlaces`: { title, locations }
 * - `mostUsedWords`: { title, words }
 * - `topGroupMembers`: { title, members }
 */

const TopSongsCard = ({ data }) => {
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
            <div className="text-sm opacity-80 mb-1">{data.country}</div>
            <h2 className="font-bold text-xl uppercase">
              {data.title || data.type}
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {data.projects &&
            data.projects.map((project, idx) => (
              <motion.div key={idx} variants={item}>
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-medium">
                    {idx + 1}. {project.name}
                  </div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              </motion.div>
            ))}

          {data.subjects &&
            data.subjects.map((subject, idx) => (
              <motion.div key={idx} variants={item}>
                <div className="text-sm font-medium">{subject.name}</div>
                <div className="text-xs opacity-80">{subject.description}</div>
              </motion.div>
            ))}

          {data.searches &&
            data.searches.map((search, idx) => (
              <motion.div key={idx} variants={item}>
                <div className="text-sm font-medium">
                  {idx + 1}. {search.query}
                </div>
              </motion.div>
            ))}

          {data.locations &&
            data.locations.map((location, idx) => (
              <motion.div key={idx} variants={item}>
                <div className="text-sm font-medium">
                  {idx + 1}. {location.name}
                </div>
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-32 object-cover rounded-md"
                />
              </motion.div>
            ))}

          {data.words &&
            data.words.map((word, idx) => (
              <motion.div key={idx} variants={item}>
                <div className="text-sm font-medium">{word.word}</div>
              </motion.div>
            ))}

          {data.members &&
            data.members.map((member, idx) => (
              <motion.div key={idx} variants={item}>
                <div className="text-sm font-medium">
                  {idx + 1}. {member.name}
                </div>
              </motion.div>
            ))}
        </motion.div>

        <div className="mt-auto flex justify-between items-center">
          {/* <SpotifyLogo /> */}
          <span className="text-3xl font-bold">
            {data.totalTime
              ? `${Math.floor(data.totalTime / 1440)} days`
              : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopSongsCard;
