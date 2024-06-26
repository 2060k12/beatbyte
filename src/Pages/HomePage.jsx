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
        <h2 className="font-bold text-4xl px-5 lg:px-0 mt-4">Top Pickups </h2>
        <AlbumArtImg />
      </div>
      {/* <div className=" ">
        <h2 className="font-bold text-4xl px-5 lg:px-0">News </h2>
        <AlbumArtImg />
      </div> */}
      <div>
        <h2 className="font-bold text-4xl px-5 lg:px-0">Recommended Artist </h2>
        <ArtistArtHome />
      </div>
      {/* <div>
        <h2 className="font-bold text-4xl px-5 lg:px-0 ">Recently Viewed</h2>
        <ArtistArtHome />
      </div> */}
    </div>
  );
};

export default HomePage;
