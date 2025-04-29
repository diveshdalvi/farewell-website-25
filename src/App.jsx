import React from "react";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import bg from "./assets/images/lastBG.png";
// import bg from "./assets/images/bg.jpeg";
// import bg from "./assets/images/bg[1].jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import img1 from "./assets/images/homepage/img1.png";
import img2 from "./assets/images/homepage/img2.png";
import img3 from "./assets/images/homepage/img3.png";
import img4 from "./assets/images/homepage/img4.png";
import img5 from "./assets/images/homepage/img5.png";
// import img6 from "./assets/images/homepage/img6.png";
import img7 from "./assets/images/homepage/img7.png";
const App = () => {
  const decorImages = [img1, img2, img3, img4, img5, img7];
  const shuffledImages = decorImages
    .sort(() => 0.5 - Math.random()) // shuffle array
    .slice(0, 6); // get 6 unique images only

  const randomItems = shuffledImages.map((img, idx) => ({
    id: idx,
    top: `${Math.floor(Math.random() * 80 + 5)}%`,
    left: `${Math.floor(Math.random() * 80 + 5)}%`,
    image: img,
    size: Math.floor(Math.random() * 100 + 200), // 100px to 180px
    rotation: Math.floor(Math.random() * 20 - 10), // -10 to +10 deg
  }));

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        {randomItems.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt="decor"
            className="absolute opacity-90 mix-blend-normal  "
            style={{
              top: item.top,
              left: item.left,
              width: `${item.size}px`,
              height: `${item.size}px`,
              transform: `rotate(${item.rotation}deg)`,
              zIndex: 1,
            }}
          />
        ))}
      </div> */}

      <Navbar />
      {/* for desktop */}
      <div className="hidden md:flex justify-center items-center flex-grow">
        <Book />
      </div>
      {/* for mobile */}
      <div className="flex md:hidden justify-center items-center flex-grow">
        <Book />
      </div>
      {/* Floating Download Button */}
      <button
        className="fixed bottom-4 right-4 bg-[#584738] text-white p-3 rounded-full shadow-lg hover:bg-[#725c49] focus:outline-none cursor-pointer"
        style={{ zIndex: 40 }}
        onClick={() => alert("Download initiated!")} // Replace with actual download logic
      >
        <ArrowDownwardIcon size={24} />
      </button>
    </div>
  );
};

export default App;
