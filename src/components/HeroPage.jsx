import React from "react";
import Image from "../assets/image/album.jpg";

const HeroPage = () => {
  return (
    <>
      <div className="flex flex-row justify-start align-tops border-r border-t border-b border-l border-white ">
        <img
          src={Image}
          alt="Image of beatles"
          width="700px"
          className="rounded-3xl col-span-1 ml-0 mr-8 "
        />
        <div className="col-span-2">
          <h1 className="text-6xl font-bold">Abbey Road</h1>
          <h3 className="text-2xl font-bold">
            The Beatles, 26th September 1969
          </h3>
          <p className="text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, sequi
            possimus nam hic, consequatur nesciunt non in alias facilis ea.
          </p>

          <button className="px-3 py-1 bg-[#09E85E] text-black font-bold rounded-md text-2xl mt-5 ">
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
