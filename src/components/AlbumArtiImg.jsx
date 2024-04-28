import React, { useEffect, useState } from "react";
import { getDocs, collection, collectionGroup } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { set } from "firebase/database";

const AlbumArtHome = () => {
  const [loading, setLoading] = useState(false);
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
  const randomAlbums = shuffledAlbums.slice(0, 10);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <Carousel responsive={responsive}>
        {randomAlbums.map((eachAlbum) => (
          <div key={eachAlbum.id} className="">
            <div className=" m-2 ml-0 mr-10 max-w-[200px]">
              <Link
                to={`/album/${eachAlbum.id}`}
                state={{ albumId: eachAlbum.id }}
              >
                {loading && (
                  <div>
                    <div className="flex flex-col gap-4 w-52">
                      <div className="skeleton h-32 w-full"></div>
                      <div className="skeleton h-4 w-28"></div>
                      <div className="skeleton h-4 w-full"></div>
                      <div className="skeleton h-4 w-full"></div>
                    </div>
                  </div>
                )}

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
      </Carousel>
    </>
  );
};

export default AlbumArtHome;
