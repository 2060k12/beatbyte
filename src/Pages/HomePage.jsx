import React from "react";
import AlbumArtHome from "../components/AlbumArtHome";
import LoginForm from "../components/LoginForm";
import HeroPage from "../components/HeroPage";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeroPage />
      </div>

      <div className=" ">
        <h2 className="text-5xl mt-6">Top Pickups </h2>
        <AlbumArtHome />
        <AlbumArtHome />
        <AlbumArtHome />
        <AlbumArtHome />
      </div>

      <div className="text-5xl ">
        <h2>News </h2>
        <AlbumArtHome />
      </div>

      <div className="text-5xl ">
        <h2>Recommended Artist </h2>
        <AlbumArtHome />
      </div>

      <div className="text-5xl ">
        {" "}
        <h2>Recently Viewed </h2>
        <AlbumArtHome />
      </div>
    </div>
  );
};

export default HomePage;
