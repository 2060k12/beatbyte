import React, { useState, useEffect } from "react";
import { getDocs, collection, collectionGroup } from "firebase/firestore";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "../assets/image/album.jpg";
import { auth, db } from "../config/firebase";

const HeroPage = () => {
  const [albumsList, setAlbumList] = useState([]);
  const albumCollectionRef = collectionGroup(db, "albums");

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
  function shuffleArray(albumsList) {
    for (let i = albumsList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [albumsList[i], albumsList[j]] = [albumsList[j], albumsList[i]];
    }
    return albumsList;
  }

  const shuffledAlbums = shuffleArray(albumsList);
  const randomAlbums = shuffledAlbums.slice(0, 5);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div>
        <div>
          <Carousel responsive={responsive}>
            {randomAlbums.map((eachAlbum) => (
              <div key={eachAlbum.id}>
                <div className="lg:p-0 p-4 flex flex-col md:flex-row justify-center items-center md:justify-start ">
                  <img
                    src={eachAlbum.albumArt}
                    alt="Image of beatles"
                    className="rounded-3xl md:mr-8 mb-8 md:mb-0 object-cover "
                    style={{
                      maxHeight: "400px",
                      maxWidth: "700px",
                      width: "100%",
                    }}
                  />
                  <div className="col-span-2  min-w-1/2">
                    <h1 className="text-4xl md:text-6xl font-bold">
                      {eachAlbum.name}
                    </h1>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {eachAlbum.name}, {eachAlbum.recorded}
                    </h3>
                    <p className="text-lg md:text-xl">
                      {eachAlbum.about && eachAlbum.about.length > 100
                        ? eachAlbum.about.substring(0, 100) + "..."
                        : eachAlbum.about}
                    </p>

                    <Link
                      to={`/album/${eachAlbum.id}`}
                      state={{ albumId: eachAlbum.id }}
                    >
                      <button className="bg-green-600 text-2xl py-2 px-4 rounded-xl mt-5 font-bold ">
                        Load More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
