import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import WrappedCard from "../components/WrappedCard";
import CardNavigation from "../components/CardNavigation";
import TotalMinutesCard from "../components/cards/TotalMinutesCard";
import TopArtistsCard from "../components/cards/TopArtistsCard";
import TopSongsCard from "../components/cards/TopSongsCard";
import TopArtistsFeaturedCard from "../components/cards/TopArtistsFeaturedCard";
import TopSongsFeaturedCard from "../components/cards/TopSongsFeaturedCard";
import { cardData } from "../data/mockData";
import TopGroupMembers from "../components/cards/TopGroupMembers";
import MrandMsAIDS from "../components/cards/MrandMsAIDS";

const Wrapped2025 = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    setCurrentCardIndex(0); // Reset to the first card when the component mounts
  }, []);

  const goToNextCard = () => {
    if (currentCardIndex < cardData.length - 1) {
      setDirection("left");
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const goToPreviousCard = () => {
    if (currentCardIndex > 0) {
      setDirection("right");
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const renderCard = (index) => {
    const card = cardData[index];

    switch (card.type) {
      case "minutes":
        return <TotalMinutesCard data={card} />;
      case "topSubjects":
        return <TopArtistsCard data={card} />;
      case "topGoogleSearches":
        return <TopSongsCard data={card} />;
      case "topProjects":
        return <TopArtistsFeaturedCard data={card} />;
      case "mostUsedWords":
        return <TopSongsFeaturedCard data={card} />;
      case "topGroupMembers":
        return <TopGroupMembers data={card} />;
      case "mr&msAIDS":
      return <MrandMsAIDS data={card} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md mx-auto px-12">
        <div className="relative w-full">
          <WrappedCard direction={direction} isActive={true}>
            {renderCard(currentCardIndex)}
          </WrappedCard>

          <CardNavigation
            currentIndex={currentCardIndex}
            totalCards={cardData.length}
            onNext={goToNextCard}
            onPrevious={goToPreviousCard}
          />
        </div>
      </div>

      {/* <div className="fixed bottom-4 left-0 right-0 text-center text-white opacity-70 text-xs flex items-center justify-center">
        <Sparkles className="w-4 h-4 mr-1" />
        <span>Created with StackBlitz</span>
      </div> */}
    </div>
  );
};

export default Wrapped2025;
