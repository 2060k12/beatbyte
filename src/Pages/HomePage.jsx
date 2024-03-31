import React from "react";
import AlbumArtImg from "../components/AlbumArtiImg";
import HeroPage from "../components/HeroPage";
import ArtistArtHome from "../components/ArtistArtHome";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeroPage />
      </div>

      <div className=" ">
        <h2 className="text-4xl">Top Pickups </h2>
        <AlbumArtImg />
      </div>
      <div className="text-4xl ">
        <h2>News </h2>
        <AlbumArtImg />
      </div>
      <div>
        <h2 className="text-4xl">Recommended Artist </h2>
        <ArtistArtHome />
      </div>
      <div>
        <h2 className="text-4xl ">Recently Viewed -Not Started woking yet </h2>
        <ArtistArtHome />
      </div>
    </div>
  );
};

export default HomePage;
