import React from "react";
import { motion } from "framer-motion";

/**
 * Expected `data` shape:
 * {
 *   id: string,
 *   type: string,
 *   title: string,
 *   words: Array<{ word: string }>
 * }
 */

const TopSongsFeaturedCard = ({ data }) => {
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

  const wordAnimation = {
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
    backgroundImage: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
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
              id="wave-lines"
              patternUnits="userSpaceOnUse"
              width="60"
              height="30"
            >
              <path
                d="M0 15 Q15 0, 30 15 T60 15"
                stroke="rgba(255,255,255,0.1)"
                fill="none"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-lines)" />
        </svg>
      </div>

      <div className="flex flex-col h-full p-8 text-white relative z-10">
        <motion.div
          className="mb-4"
          initial="hidden"
          animate="visible"
          variants={headerAnimation}
        >
          <p className="text-sm opacity-100 mb-1">Engineering Life</p>
          <h2 className="font-bold text-3xl">{data.title}</h2>
        </motion.div>

        <div className="flex-grow my-4">
          <div className="space-y-4">
            {data.words.map((word, idx) => (
              <motion.div
                key={idx}
                className="flex items-center"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
              >
                <div className="bg-white/10 w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold mr-2">
                  {idx + 1}
                </div>
                <div className="flex items-center flex-grow">
                  <div>
                    <div className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl ">
                      {word.word}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center">
          {/* <SpotifyLogo /> */}
          <span className="uppercase text-sm font-bold tracking-widest">
            {data.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopSongsFeaturedCard;
