import React from "react";
import HTMLFlipBook from "react-pageflip";
import image1 from "../assets/images/book/1.jpg";
import image2 from "../assets/images/book/2.jpg";
import image3 from "../assets/images/book/3.jpg";
import image4 from "../assets/images/book/4.jpg";
import image5 from "../assets/images/book/5.jpg";
import image6 from "../assets/images/book/6.jpg";
import image7 from "../assets/images/book/7.jpg";
import image8 from "../assets/images/book/8.jpg";
import image9 from "../assets/images/book/9.jpg";
import image10 from "../assets/images/book/10.jpg";
import image11 from "../assets/images/book/11.jpg";
import image12 from "../assets/images/book/12.jpg";
import image13 from "../assets/images/book/13.jpg";
import image14 from "../assets/images/book/14.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];

const Book = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-center h-screen w-screen">
        <HTMLFlipBook
          width={300}
          height={450}
          showCover={true}
          flippingTime={2000}
          className="bg-cover bg-no-repeat bg-center"
        >
          {images.map((img, idx) => (
            <div className="demoPage" key={idx}>
              <img
                src={img}
                alt={`page-${idx + 1}`}
                className="w-[600px] h-[500px] object-contain"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden justify-center items-center h-full w-full">
        <HTMLFlipBook
          width={350}
          height={500}
          showCover={true}
          flippingTime={2000}
          className="bg-cover bg-no-repeat bg-center"
        >
          {images.map((img, idx) => (
            <div className="demoPage" key={idx}>
              <img
                src={img}
                alt={`page-${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default Book;
