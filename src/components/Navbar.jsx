import { useNavigate } from "react-router-dom";
import { useState } from "react";
import video1Img from "../assets/images/video1.jpg"; // Adjust the path as necessary
const Navbar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-between items-center py-1 px-2 bg-[#CCBDA6] relative">
      {/* <span className="text-xl md:text-2xl font-Oblata text-[#584738] flex flex-col text-center">
        Batch of{" "}
        <span className="text-2xl md:text-3xl font-semibold">2025</span>
      </span> */}
      <button
        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr cursor-pointer from-pink-500 via-red-500 to-yellow-500 p-1"
        onClick={openModal}
      >
        <img
          src={video1Img}
          alt="Story"
          className="w-full h-full rounded-full object-cover"
        />
      </button>
      <span className="font-Duhit text-[#5D4B3D] text-2xl md:text-4xl">
        Farewell
      </span>
      <div className="flex items-center space-x-4">
        {/* Instagram-style round button */}

        {/* Wrapped button */}
        <button
          className="bg-[#5D4B3D] text-white p-2 font-serif cursor-pointer rounded-full"
          onClick={() => navigate("/wrapped")}
        >
          Wrapped
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Close button at the top-right corner of the screen */}
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={closeModal}
          >
            ✖
          </button>

          {/* Video container */}
          <div
            className="bg-black p-4 rounded-lg relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="relative w-full h-0 pb-[56.25%] bg-black">
              {/* <iframe
                src="https://drive.google.com/file/d/1SaPCclwnw-Y8Mq-oPWYc93eYEdDL0-_X/preview"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                controls
              ></iframe> */}

              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                // autoPlay
              >
                <source
                  src="https://res.cloudinary.com/diqsas8cd/video/upload/v1745960220/farewell_video_ru5rzl.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
