import React, { useEffect } from "react";
import { auth, db } from "../config/firebase";
import { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

const Browse = () => {
  //tutorial

  const artistCollectionRef = collection(db, "artist");
  // database
  const [artistList, setArtistList] = useState([]);

  let artistId;
  useEffect(() => {
    const getArtistName = async () => {
      //read the data
      //set the movie list

      try {
        const data = await getDocs(artistCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setArtistList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getArtistName();
  }, []);
  return (
    <div>
      <div className="flex">
        {artistList.map((artist) => (
          <div className="flex-cols justify-center w-40 m-4">
            <img
              className="w-40 h-40 rounded-full "
              src={artist.profileImage}
              alt=""
            />
            <h1 className="text-center w-full">
              <Link to={`/artist/${artist.id}`} state={{ artistId: artist.id }}>
                {artist.name}
              </Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
