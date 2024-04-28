import React from "react";
import { useState, useEffect } from "react";
import Browse from "../BrowseComponents";
import { Link, useLocation } from "react-router-dom";
import { getDocs, collection, doc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useParams } from "react-router-dom";

const artistProfileAbout = () => {
  const artistId = useParams().id;

  console.log(artistId);

  const artistCollectionRef = collection(db, "artist");
  const albumCollectionRef = collection(db, `artist/${artistId}/albums`);
  // database
  const [artistList, setArtistList] = useState([]);

  // fetch albums from queen database
  const [albumsList, setAlbumList] = useState([]);

  useEffect(() => {
    const getArtistName = async () => {
      //read the data
      //set the movie list

      try {
        const data = await getDocs(artistCollectionRef);

        const filteredData = data.docs
          .filter((doc) => doc.id === artistId)
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

        setArtistList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getArtistName();
  }, [artistId]);

  useEffect(() => {
    const getAlbumName = async () => {
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
    getAlbumName();
  }, []);

  return (
    <>
      <div className="w-full">
        {artistList.map((artist) => (
          <>
            <div className="hero ">
              <div className="hero-content flex-col lg:flex-row lg:justify-start">
                <div className="avatar flex-col">
                  <div className="w-64 rounded-full ring  ring-offset-base-100 ring-offset-2">
                    <img src={artist.profileImage} />
                  </div>
                  <h1 className="text-center w-full text-3xl font-bold">
                    {artist.name}
                  </h1>
                </div>

                <div className="ml-20">
                  <h1 className="text-4xl font-bold">Stream or Buy</h1>
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
                  <p className="py-3 text-lg">
                    <span className="font-bold">Origin:</span> {artist.origin}
                    <br />
                    <span className="font-bold">Genres:</span> {artist.genres}
                    <br />
                    <span className="font-bold">Labels: </span>
                    {artist.labels}
                    <br />
                    <span className="font-bold"> Members: </span>
                    {artist.members}
                    <br />
                    <span className="font-bold"> Website: </span>
                    <a href={artist.website} target="_blank">
                      {artist.website}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="join join-vertical w-full mt-10">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  <h1 className="text-4xl font-bold mt-5">About</h1>
                </div>
                <div className="collapse-content">
                  <p>{artist.about}</p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  <h1 className="text-3xl font-bold mt-3">Albums</h1>
                </div>
                <div className="collapse-content">
                  {/* // todo:: Set albums */}
                  <section className="flex flex-row">
                    {albumsList.map((eachAlbum) => (
                      <div key={eachAlbum.id}>
                        <div className=" m-2 ml-0 mr-10 max-w-[200px]  ">
                          <img
                            src={eachAlbum.albumArt}
                            alt="Image "
                            className="h-[200px] rounded-3xl block p-0 m-0"
                          />

                          <span className="text-2xl pt-1 mt-2 center block text-center leading-7 ">
                            {eachAlbum.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  <h1 className="text-3xl font-bold mt-3">Upcomming Event</h1>{" "}
                </div>
                <div className="collapse-content">
                  <p className="text-center">Sydney, Australia</p>
                  <p className="text-center font-bold">No Upcomming Events</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default artistProfileAbout;
