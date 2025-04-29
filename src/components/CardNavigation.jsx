import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardNavigation = ({ currentIndex, totalCards, onNext, onPrevious }) => {
  return (
    <>
      {/* Side Navigation Buttons */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 transform z-50">
        <button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className={`h-12 w-12 rounded-full bg-black/30 backdrop-blur-md transition-all duration-300 flex items-center justify-center ${
            currentIndex === 0
              ? "opacity-0 pointer-events-none"
              : "opacity-100 hover:bg-black/50"
          }`}
          aria-label="Previous card"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
      </div>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 transform z-50">
        <button
          onClick={onNext}
          disabled={currentIndex === totalCards - 1}
          className={`h-12 w-12 rounded-full bg-black/30 backdrop-blur-md transition-all duration-300 flex items-center justify-center ${
            currentIndex === totalCards - 1
              ? "opacity-0 pointer-events-none"
              : "opacity-100 hover:bg-black/50"
          }`}
          aria-label="Next card"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>

      {/* Bottom Progress Indicators */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center z-50">
        <div className="flex gap-1.5">
          {Array.from({ length: totalCards }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-white scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardNavigation;
