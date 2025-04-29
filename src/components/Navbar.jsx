import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-1 px-2 bg-[#CCBDA6]">
      <span className="text-xl md:text-2xl font-Oblata text-[#584738] flex flex-col text-center">
        Batch of{" "}
        <span className="text-2xl md:text-3xl font-semibold">2025</span>
      </span>
      <span className=" font-Duhit text-[#5D4B3D] text-2xl md:text-4xl">
        Farewell
      </span>
      <button
        className="bg-[#5D4B3D] text-white p-2 font-serif cursor-pointer rounded-full"
        onClick={() => navigate("/wrapped")}
      >
        Wrapped
      </button>
    </div>
  );
};

export default Navbar;
