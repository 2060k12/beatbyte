import React from "react";
import { useState, useEffect } from "react";
import Browse from "../BrowseComponents";
import { Link, useLocation } from "react-router-dom";
import AddReviews from "../AddReviews";
import Image from "../../assets/star-sharp.svg";
import { addDoc, setDoc } from "firebase/firestore";

import {
  getDocs,
  collection,
  doc,
  collectionGroup,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";

const AlbumAbout = () => {
  const [reviewsList, setReviewsList] = useState([]);
  var albumName;
  let reviews = [];

  //for reviews
  const reviewsCollectionRef = collectionGroup(db, "reviews");
  // favourites  const [addFavourites, setAddFavourites] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      //read the data
      //set the movie list

      try {
        const data = await getDocs(reviewsCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setReviewsList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getReviews();
  }, []);

  const location = useLocation();
  const albumId = location.state.albumId;

  const [albumsList, setAlbumList] = useState([]);

  const albumCollectionRef = collectionGroup(db, "albums");

  const artistCollectionRef = collectionGroup(db, "reviews");

  useEffect(() => {
    const getAlbumCollection = async () => {
      //read the data
      //set the album list

      try {
        const data = await getDocs(albumCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAlbumList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    const getArtistCollection = async () => {
      //read the data
      //set the album list

      try {
        const data = await getDocs(artistCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAlbumList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getAlbumCollection();
    getArtistCollection();
  }, []);

  let soloAlbumDetail = [...albumsList];

  for (let i = 0; i < soloAlbumDetail.length; i++) {
    if (soloAlbumDetail[i].id == albumId) {
      soloAlbumDetail = soloAlbumDetail[i];
    }
  }
  const [showPopup, setShowPopup] = useState(false);

  const handlePressButton = () => {
    setShowPopup(true);
  };
  return (
    <>
      <div className="mb-5">
        <div className=" ">
          <div className="   ">
            <h1 className="text-5xl font-bold">
              {soloAlbumDetail.name} <ion-icon name="star"></ion-icon>
            </h1>
            <h1 className="text-4xl font-normal underline">Queen</h1>
            <h2 className="font-extralight text-xl">
              {" "}
              {soloAlbumDetail.genre}
            </h2>
            <div className="flex flex-row  justify-between">
              <div className="flex flex-row space-x-16 h-[300px] mb-20">
                <img
                  src={soloAlbumDetail.albumArt}
                  className="max-w-sm rounded-3xl shadow-2xl w-[300px] h-[300px] object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold ">Stream or Buy</h1>
                  <p className="flex px-0 mt-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png"
                      width={40}
                      height={40}
                      alt=""
                      className="mr-4"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/361px-Apple_Music_icon.svg.png"
                      width={40}
                      height={40}
                      alt=""
                      className="mr-4"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amazon_Music_logo.svg/89px-Amazon_Music_logo.svg.png?20211224163912"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </p>

                  <p className="py-3 w-[450px]">
                    <div className="flex flex-row  space-x-[20px] ">
                      <h className="font-bold text-2xl inline mr-5">
                        Released:{" "}
                      </h>
                      <h className="text-2xl font-thin inline">
                        {soloAlbumDetail.released}
                      </h>
                    </div>
                    <div className="flex flex-row space-x-[50px] ">
                      <h className="font-bold text-2xl inline mr-5">Studio: </h>
                      <h className="text-2xl font-thin inline">
                        {soloAlbumDetail.studio}
                      </h>
                    </div>
                    <div className="flex flex-row  space-x-[45px] ">
                      <h className="font-bold text-2xl inline mr-5">Length: </h>
                      <h className="text-2xl font-thin inline">
                        {soloAlbumDetail.length}
                      </h>
                    </div>

                    <div className="flex flex-row  space-x-[63px] ">
                      <h className="font-bold text-2xl inline mr-5">Label: </h>
                      <h className="text-2xl font-thin inline">
                        {soloAlbumDetail.label}
                      </h>
                    </div>
                  </p>
                </div>
              </div>

              <div className="flex flex-col h-[300px]">
                {showPopup && (
                  <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center">
                    <AddReviews
                      albumId={albumId}
                      thisAlbumName={soloAlbumDetail.name}
                    />

                    <button
                      className="text-xl font-bold  bg-red-600 hover:bg-red-700 text-white px-4 rounded-l rounded-lg h-[290px]"
                      onClick={() => setShowPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col h-[300px]">
                <button className="text-2xl font-bold">Press</button>
                <button
                  onClick={handlePressButton}
                  className="bg-[#2F2E2E]  h-[260px] w-16 flex flex-col  justify-center"
                >
                  <img src={Image} alt="" className="bg-transparent w-1" />

                  <span className="text-xl pl-4 writing-mode-vertical bg-transparent font-bold">
                    Leave Your Review
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <h1 className="text-4xl font-bold mt-5">About</h1>
              </div>
              <div className="collapse-content">{soloAlbumDetail.about}</div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                <h1 className="text-3xl font-bold mt-3">Track</h1>
              </div>
              <div className="collapse-content text-2xl ">
                {soloAlbumDetail?.tracks?.map((track, index) => (
                  <li key={index} className="flex flex-row ">
                    <div className="w-2/3">{track}</div>
                    <button
                      className="flex justify-end"
                      onClick={async () => {
                        await addDoc(
                          collection(
                            db,
                            "users",
                            auth.currentUser.uid,
                            "favourites"
                          ),
                          {
                            track: track,
                          }
                        );
                      }}
                    >
                      <ion-icon name="heart-outline"></ion-icon>{" "}
                    </button>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Reviews</h1>

        <div>
          {reviewsList.map((items) => (
            <div key={items.userName}>
              {items.albumName?.trim().toLowerCase() ===
                soloAlbumDetail?.name?.trim().toLowerCase() && (
                <div className="flex flex-row py-4 ml-4">
                  <img
                    src="https://loremflickr.com/200/200"
                    alt=""
                    className="h-20 rounded-xl"
                  />

                  <div className="px-3">
                    <h1 className=" font-bold text-2xl ">{items.userName}</h1>
                    <div className="p-0">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked={parseInt(items.rating) === 1}
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked={parseInt(items.rating) === 2}
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked={parseInt(items.rating) === 3}
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked={parseInt(items.rating) === 4}
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked={parseInt(items.rating) === 5}
                        />
                      </div>
                    </div>
                    <p className="text-s">{items.comment}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AlbumAbout;
