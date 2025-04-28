import React from "react";
import HTMLFlipBook from "react-pageflip";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
const Book = () => {
  return (
    <div className="">
      <HTMLFlipBook
        width={400}
        height={400}
        showCover={true}
        className="bg-[#B59E7D]"
      >
        <div className="demoPage">
          <img src={image1} alt="" />
        </div>
        <div className="demoPage">
          <img src={image2} alt="" />
        </div>
        <div className="demoPage">
          <img src={image1} alt="" />
        </div>
        <div className="demoPage">
          <img src={image2} alt="" />
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
