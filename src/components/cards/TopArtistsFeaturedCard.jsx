import React from "react";
import { motion } from "framer-motion";

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

  const projectAnimation = {
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
          className="mb-4"
          initial="hidden"
          animate="visible"
          variants={headerAnimation}
        >
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-white ">
            {data.title}
          </h2>
        </motion.div>

        <div className="flex-grow space-y-4">
          {data.projects.map((project, idx) => {
            // Separate description from the project name
            const descriptionMatch = project.name.match(/\((.*?)\)/);
            const description = descriptionMatch ? descriptionMatch[1] : null;
            const projectName = project.name.replace(/\(.*?\)/, "").trim();

            return (
              <motion.div
                key={idx}
                className="flex items-start"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={projectAnimation}
              >
                <span className="text-xs font-semibold mr-3 mt-1">
                  {idx + 1}.
                </span>
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                    {projectName}
                  </div>
                  {description && (
                    <div className="text-xs opacity-80 mt-1 text-white">
                      {description}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-auto pt-6">
          <span className="text-xl font-bold">
            {data.projects?.length?.toLocaleString?.() || "0"} Projects
            Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopArtistsFeaturedCard;
