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
    // to ger artist
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

  // to get albums
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
      } catch (error) {
        console.error(error);
      }
    };
    getAlbumCollection();
  }, []);

  // this will shuffle the array so we can see random products each time we refresh

  function shuffleArray(albumsList) {
    for (let i = albumsList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [albumsList[i], albumsList[j]] = [albumsList[j], albumsList[i]];
    }
    return albumsList;
  }

  const shuffledAlbums = shuffleArray(albumsList);
  const randomAlbums = shuffledAlbums.slice(0, 5);

  return (
    <>
      <div className="flex flex-wrap lg:justify-start justify-center lg:p-0 pl-2">
        {randomAlbums.map((eachAlbum) => (
          <div key={eachAlbum.id} className="">
            <div className=" m-2 ml-0 mr-10 max-w-[200px]">
              <Link
                to={`/album/${eachAlbum.id}`}
                state={{ albumId: eachAlbum.id }}
              >
                <img
                  src={eachAlbum.albumArt}
                  alt="Image "
                  className="h-[150px] md:h-[200px] rounded-3xl block p-0 m-0 object-cover  "
                />

                <span className="text-[25px] pt-1 mt-2 center block text-center leading-8 font-light">
                  {eachAlbum.name}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumArtHome;
