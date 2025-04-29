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
      {/* <div className="hidden md:flex border justify-center object-cover items-center h-full w-full transform translate-x-[-10%] translate-y-[-50%]">
        <HTMLFlipBook
          width={500} // Adjusted width to match image size
          height={800} // Adjusted height to match image size
          showCover={true}
          flippingTime={2000}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="demoPage">
            <img src={image1} alt="" className="" />
          </div>
          <div className="demoPage">
            <img src={image2} alt="" className="" />
          </div>
          <div className="demoPage">
            <img
              src={secondyearImage}
              alt=""
              className=""
            />
          </div>
          <div className="demoPage">
            <img
              src={secondYearImage2}
              alt=""
              className=""
            />
          </div>
          <div className="demoPage">
            <img src={image5} alt="" className="" />
          </div>
          <div className="demoPage">
            <img src={image6} alt="" className="" />
          </div>
          <div className="demoPage">
            <img src={image7} alt="" className="" />
          </div>
          <div className="demoPage">
            <img
              src={lastimage}
              alt=""
              className=""
            />
          </div>
        </HTMLFlipBook>
      </div> */}
      <div className="hidden md:flex justify-center items-center h-screen w-screen ">
        <HTMLFlipBook
          width={300} // match image width
          height={450} // match image height
          showCover={true}
          flippingTime={2000}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="demoPage">
            <img
              src={image1}
              alt=""
              className="w-[600px] h-[500px] object-contain"
            />
          </div>
          <div className="demoPage">
            <img
              src={image2}
              alt=""
              className="w-[600px] h-[500px] object-contain"
            />
          </div>
          <div className="demoPage">
            <img
              src={secondyearImage}
              alt=""
              className="w-[600px] h-[500px] object-contain"
            />
          </div>
          <div className="demoPage">
            <img
              src={secondYearImage2}
              alt=""
              className="w-[600px] h-[500px] object-contain"
            />
          </div>
          <div className="demoPage">
            <img
              src={image5}
              alt=""
              className="w-[600px] h-[500px] object-contain"
            />
          </div>
          <div className="demoPage">
            <img
              src={image6}
              alt=""
              className="w-[600px] h-[500px] object-contain"
            />
          </div>
          <div className="demoPage">
            <img
              src={image7}
              alt=""
              className="w-[600px] h-[500px] object-contain"
            />
          </div>
          <div className="demoPage">
            <img
              src={lastimage}
              alt=""
              className="w-[600px] h-[500px] object-contain"
            />
          </div>
        </HTMLFlipBook>
      </div>

      <div className="flex md:hidden justify-center items-center h-full w-full">
        <HTMLFlipBook
          width={350} // Adjusted width to match image size
          height={500} // Adjusted height to match image size
          showCover={true}
          flippingTime={2000}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="demoPage">
            <img src={image1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="demoPage">
            <img src={image2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="demoPage">
            <img
              src={secondyearImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="demoPage">
            <img
              src={secondYearImage2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="demoPage">
            <img src={image5} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="demoPage">
            <img src={image6} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="demoPage">
            <img src={image7} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="demoPage">
            <img
              src={lastimage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default Book;
