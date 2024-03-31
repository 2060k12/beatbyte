import React, { useEffect } from "react";
import { auth, db } from "../config/firebase";
import { useState } from "react";
import { getDocs, collection, collectionGroup } from "firebase/firestore";
import { Link } from "react-router-dom";

const Browse = () => {
  // declaring variable for album id and artist id
  let artistId;
  let albumId;

  // database

  const artistCollectionRef = collection(db, "artist");

  const albumCollectionRef = collectionGroup(db, "albums");

  // use state
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

  useEffect(() => {
    const getAlbumCollection = async () => {
      //read the data
      //set the movie list

      try {
        const data = await getDocs(albumCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAlbumList(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getAlbumCollection();
  }, []);

  return (
    <div className="py-6">
      <h1 className="font-bold text-4xl px-5 lg:px-0"> Browse all artists</h1>
      <div className="flex flex flex-wrap lg:justify-start justify-center lg:p-0 ">
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

      <h1 className="font-bold text-4xl px-5 lg:px-0"> Browse all albums</h1>

      <div className="flex flex flex-wrap lg:justify-start justify-center lg:p-0">
        {albumsList.map((eachAlbum) => (
          <div key={eachAlbum.id}>
            <div className=" m-2 ml-0 mr-10 max-w-36  ">
              <Link
                to={`/album/${eachAlbum.id}`}
                state={{ albumId: eachAlbum.id }}
              >
                <img
                  src={eachAlbum.albumArt}
                  alt="Image "
                  className="h-[200px] rounded-3xl block p-0 m-0"
                />

                <span className="text-lg pt-1 mt-2 center block text-center leading-7 ">
                  {eachAlbum.name}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
