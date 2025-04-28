import React from "react";
import HTMLFlipBook from "react-pageflip";
import image1 from "../assets/images/book/1.png";
import image2 from "../assets/images/book/2.png";
import image5 from "../assets/images/book/5.png";
import image6 from "../assets/images/book/6.png";
import image7 from "../assets/images/book/7.png";
import lastimage from "../assets/images/book/last page.png";
import secondyearImage from "../assets/images/book/SECOND YEAR.png";
import secondYearImage2 from "../assets/images/book/SECOND YEAR (2).png";

const Book = () => {
  return (
    <>
      <div className="hidden md:flex justify-center items-center h-full w-full transform translate-x-[-10%] ">
        <HTMLFlipBook
          width={150}
          height={250}
          maxHeight={50}
          maxWidth={50}
          showCover={true}
          flippingTime={2000}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="demoPage">
            <img src={image1} alt="" />
          </div>
          <div className="demoPage">
            <img src={image2} alt="" />
          </div>
          <div className="demoPage">
            <img src={secondyearImage} alt="" />
          </div>
          <div className="demoPage">
            <img src={secondYearImage2} alt="" />
          </div>
          <div className="demoPage">
            <img src={image5} alt="" />
          </div>
          <div className="demoPage">
            <img src={image6} alt="" />
          </div>
          <div className="demoPage">
            <img src={image7} alt="" />
          </div>
          <div className="demoPage">
            <img src={lastimage} alt="" />
          </div>
        </HTMLFlipBook>
      </div>
      <div className="flex md:hidden justify-center items-center h-full w-full">
        <HTMLFlipBook
          width={300}
          height={400}
          showCover={true}
          flippingTime={2000}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="demoPage">
            <img src={image1} alt="" />
          </div>
          <div className="demoPage">
            <img src={image2} alt="" />
          </div>
          <div className="demoPage">
            <img src={secondyearImage} alt="" />
          </div>
          <div className="demoPage">
            <img src={secondYearImage2} alt="" />
          </div>
          <div className="demoPage">
            <img src={image5} alt="" />
          </div>
          <div className="demoPage">
            <img src={image6} alt="" />
          </div>
          <div className="demoPage">
            <img src={image7} alt="" />
          </div>
          <div className="demoPage">
            <img src={lastimage} alt="" />
          </div>
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default Book;
