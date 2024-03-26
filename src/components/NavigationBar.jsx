import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <div className="font-bold text-lg flex justify-between items center w-[92%]	h-12 mb-20 mt-8 ">
        <span className="text-[#09E85E] text-5xl ml-[8%]"> BeatByte</span>
        <div className="text-3xl flex items-center gap-[4vw]">
          <Link to="/"> Home</Link>
          <Link to="/browse"> Browse</Link>
          <Link to="/news"> News</Link>
          <Link to="/search"> Search</Link>
          <Link to="/login" className="text-[#09E85E]">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
