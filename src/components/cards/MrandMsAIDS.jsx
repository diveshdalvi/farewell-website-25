import React from "react";
import { motion } from "framer-motion";

/**
 * Expected `data` shape:
 * {
 *   id: string,
 *   type: string,
 *   title: string,
 *   contestants: Array<{ title: string, name: string }>
 * }
 */

const MrandMsAIDS = ({ data }) => {
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

  const contestantAnimation = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const backgroundStyle = {
    backgroundImage: "linear-gradient(135deg, #FF5722 0%, #FF9800 100%)",
  };

  // Separate contestants for Mr. and Ms.
  const mrContestants = data.contestants.filter(
    (contestant) => contestant.title === "Mr. AIDS"
  );
  const msContestants = data.contestants.filter(
    (contestant) => contestant.title === "Ms. AIDS"
  );

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
          <h2 className="font-bold text-3xl">{data.title}</h2>
        </motion.div>

        <div className="flex-grow my-4">
          <div className="space-y-4">
            {/* Display Mr. AIDS */}
            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              variants={headerAnimation}
            >
              <h3 className="font-bold text-2xl">Mr. AIDS</h3>
            </motion.div>
            {mrContestants.map((contestant, idx) => (
              <motion.div
                key={idx}
                className="flex items-center"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={contestantAnimation}
              >
                <div className="bg-white/10 w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold mr-2">
                  Mr.
                </div>
                <div className="flex items-center flex-grow">
                  <div>
                    <div className="font-medium text-lg">{contestant.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Display Ms. AIDS */}
            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              variants={headerAnimation}
            >
              <h3 className="font-bold text-2xl">Ms. AIDS</h3>
            </motion.div>
            {msContestants.map((contestant, idx) => (
              <motion.div
                key={idx}
                className="flex items-center"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={contestantAnimation}
              >
                <div className="bg-white/10 w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold mr-2">
                  Ms.
                </div>
                <div className="flex items-center flex-grow">
                  <div>
                    <div className="font-medium text-lg">{contestant.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center">
          <span className="uppercase text-sm font-bold tracking-widest">
            {data.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MrandMsAIDS;
