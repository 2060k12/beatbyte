import React, { useState, useEffect } from "react";
import { getDocs, collection, collectionGroup } from "firebase/firestore";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div className="lg:p-0 p-4 flex flex-col md:flex-row justify-center items-center md:justify-start border-white">
        {randomAlbums.map((eachAlbum) => (
          <div key={eachAlbum.id} className=""></div>
        ))}
        <img
          src={Image}
          alt="Image of beatles"
          className="rounded-3xl md:mr-8 mb-8 md:mb-0"
          style={{ maxWidth: "700px", width: "100%" }}
        />

        <div className="col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold">Abbey Road</h1>
          <h3 className="text-xl md:text-2xl font-bold">
            The Beatles, 26th September 1969
          </h3>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, sequi
            possimus nam hic, consequatur nesciunt non in alias facilis ea.
          </p>

          <button className="px-3 py-1 bg-[#09E85E] text-black font-bold rounded-md text-lg md:text-2xl mt-5">
            More Info
          </button>
          <div className="mt-2 py-2 lg:py-0 lg:mt-10 ">
            <div className="join grid grid-cols-2">
              <button className="join-item btn btn-outline">
                Previous page
              </button>
              <button className="join-item btn btn-outline">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
