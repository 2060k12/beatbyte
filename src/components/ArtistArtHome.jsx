import React, { useEffect, useState } from "react";
import { getDocs, collection, collectionGroup } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { Link } from "react-router-dom";

const AlbumArtHome = () => {
  const artistCollectionRef = collection(db, "artist");
  const albumCollectionRef = collectionGroup(db, "albums");
  const [artistList, setArtistList] = useState([]);
  const [albumsList, setAlbumList] = useState([]);
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
    <>
      <div className="flex flex-wrap lg:justify-start justify-center">
        {artistList.map((artist) => (
          <div className="flex-cols justify-center w-40 m-4">
            <Link to={`/artist/${artist.id}`} state={{ artistId: artist.id }}>
              <img
                className="w-40 h-40 rounded-full "
                src={artist.profileImage}
                alt=""
              />
              <h1 className="text-center w-full">{artist.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumArtHome;
