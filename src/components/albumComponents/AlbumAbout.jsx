import React from "react";
import { useState, useEffect } from "react";
import Browse from "../BrowseComponents";
import { Link, useLocation } from "react-router-dom";
import {
  getDocs,
  collection,
  doc,
  collectionGroup,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const AlbumAbout = () => {
  const location = useLocation();
  const albumId = location.state.albumId;
  const [albumsList, setAlbumList] = useState([]);
  const [albumsTrackList, setAlbumsTrackList] = useState([]);

  const albumCollectionRef = collectionGroup(db, "albums");
  const albumTrackCollectionRef = collectionGroup(db, "albumTrack");

  const artistCollectionRef = collectionGroup(db, "reviews");
  //reviews

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
      } catch (err) {
        console.error(err);
      }
    };

    const getAlbumTrackCollection = async () => {
      //read the data
      //set the movie list

      try {
        const data = await getDocs(albumTrackCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAlbumsTrackList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getAlbumCollection();
    getAlbumTrackCollection();
  }, []);

  let soloAlbumDetail = [...albumsList];
  let allAlbumTracks = [...albumsTrackList];

  for (let i = 0; i < soloAlbumDetail.length; i++) {
    if (soloAlbumDetail[i].id == albumId) {
      soloAlbumDetail = soloAlbumDetail[i];
    }
  }

  for (let i = 0; i < allAlbumTracks.length; i++) {
    if (
      allAlbumTracks[i].name.trim().toLowerCase() ==
      soloAlbumDetail.name.trim().toLowerCase()
    ) {
      allAlbumTracks = allAlbumTracks[i];
      delete allAlbumTracks.id;
    }
  }

  return (
    <>
      <div className="mb-5">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row   ">
            <img
              src={soloAlbumDetail.albumArt}
              className="max-w-sm rounded-lg shadow-2xl w-60"
            />

            <div>
              {/* <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div> */}
              <h1 className="text-4xl font-bold">{soloAlbumDetail.name}</h1>
              <h1 className="text-2xl ">Stream or Buy</h1>
              <p className="flex px-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png"
                  width={45}
                  alt=""
                  className="mr-4"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/361px-Apple_Music_icon.svg.png"
                  width={40}
                  alt=""
                  className="mr-4"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amazon_Music_logo.svg/89px-Amazon_Music_logo.svg.png?20211224163912"
                  width={50}
                  alt=""
                />
              </p>
              <p className="py-3">
                Released : {soloAlbumDetail.released}
                <br />
                Studio: {soloAlbumDetail.studio}
                <br />
                Length: {soloAlbumDetail.length}
                <br />
                Label: {soloAlbumDetail.label}
              </p>
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
              <div className="collapse-content">
                <div>
                  <ol>
                    {Object.values(allAlbumTracks).map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                <h1 className="text-3xl font-bold mt-3">
                  More Albums from Queen
                </h1>{" "}
              </div>
              <div className="collapse-content">
                <p>
                  <ol>
                    <li>We Will Rock You </li>
                    <li>We Will Rock You </li>
                    <li>We Will Rock You </li>
                    <li>We Will Rock You </li>
                    <li>We Will Rock You </li>
                    <li>We Will Rock You </li>
                    <li>We Will Rock You </li>
                    <li>We Will Rock You </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumAbout;
