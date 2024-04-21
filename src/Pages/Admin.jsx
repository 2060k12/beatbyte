import React, { useState } from "react";
import AddNewArtist from "../components/artistComponent/AddNewArtist";
import AddNewAlbum from "../components/albumComponents/AddNewAlbum";

const Admin = () => {
  const [artistButton, setArtistButton] = useState(true);
  const [albumButton, setAlbumButton] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-2 ">
        <button
          id="artistButton"
          className={`text-4xl font-bold px-16 py-1 border-2 rounded-r-none rounded-xl duration-1000  ${
            artistButton
              ? "bg-green-500 text-white border-none "
              : "text-white border-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setArtistButton(true);
            setAlbumButton(false);
          }}
        >
          Artist
        </button>

        <button
          id="albumButton"
          className={`text-4xl font-bold px-16 py-1 border-2 rounded-l-none rounded-xl duration-1000 ${
            albumButton
              ? "bg-green-500 text-white border-none"
              : "text-white border-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setAlbumButton(true);
            setArtistButton(false);
          }}
        >
          Album
        </button>
      </div>

      {artistButton && <AddNewArtist />}
      {albumButton && <AddNewAlbum />}
    </div>
  );
};

export default Admin;
