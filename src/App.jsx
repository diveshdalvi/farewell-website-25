import React from "react";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import bg from "./assets/images/bg.jpeg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const App = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
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
        style={{ zIndex: 1000 }}
        onClick={() => alert("Download initiated!")} // Replace with actual download logic
      >
        <ArrowDownwardIcon size={24} />
      </button>
    </div>
  );
};

export default App;
