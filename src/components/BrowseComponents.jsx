import React, { useEffect, useRef } from "react";
import { auth, db } from "../config/firebase";
import { useState } from "react";
import { getDocs, collection, collectionGroup } from "firebase/firestore";
import { Link } from "react-router-dom";
import SearchButton from "./SearchButton";

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
      } catch (error) {
        console.error(error);
      }
    };
    getAlbumCollection();
  }, []);

  const [selected, setSelected] = useState("albums");
  const [search, setSearch] = useState("");

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
    if (e.target.value === "albums") {
      console.log("albums");
    } else if (e.target.value === "artist") {
      console.log("artist");
    }

    function searchAlbums() {}

    function searchArtist() {
      // search artist
    }
  };
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [isAlbumVisible, setIsAlbumVisible] = useState(true);

  const [filteredArtist, setFilteredArtist] = useState([]);
  const [isArtistVisible, setIsArtistVisible] = useState(true);
  const [searchedItemsVisible, setSearchedItemsVisible] = useState(false);

  const browseAlbumsSection = useRef(null);
  const browseArtistSection = useRef(null);

  return (
    <>
      <div className="relative">
        <input
          type="text"
          className="bg-white w-full h-16 rounded-3xl pl-4 pr-16 text-2xl text-black"
          placeholder="Type here to search for Albums / Artist..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (e.target.value === "") {
              setIsAlbumVisible(true);
              setIsArtistVisible(true);
              setSearchedItemsVisible(false);
            } else {
              setSearchedItemsVisible(true);
              setIsArtistVisible(false);
              setIsAlbumVisible(false);
              if (selected === "artist") {
                const filtered = artistList.filter((artist) =>
                  artist.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredArtist(filtered);
              } else {
                const filtered = albumsList.filter((album) =>
                  album.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredAlbums(filtered);
              }
            }
          }}
        />

        <select
          className="absolute top-0 right-0 h-full rounded-3xl bg-white px-4 text-3xl "
          onChange={handleSelectChange}
          value={selected}
        >
          <option value="albums">Albums</option>
          <option value="artist">Artist</option>
        </select>

        <div className="absolute top-0 right-0 border-white border-4 flex items-center h-full px-6 pointer-events-none  rounded-r-3xl">
          <ion-icon name="filter-outline" size="large"></ion-icon>
        </div>
      </div>

      {/* Searched Section */}

      <div>
        <div>
          {searchedItemsVisible && selected == "artist" && (
            <div ref={browseArtistSection}>
              <div className="py-6">
                <h1 className="font-bold text-4xl px-5 lg:px-0">
                  {" "}
                  Browse all artists
                </h1>
                <div className="flex flex flex-wrap lg:justify-start justify-center lg:p-0 ">
                  {filteredArtist.map((artist) => (
                    <div
                      key={artist.id}
                      className="flex-cols justify-center w-40 m-4"
                    >
                      <Link
                        to={`/artist/${artist.id}`}
                        state={{ artistId: artist.id }}
                      >
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
              </div>
            </div>
          )}
        </div>

        <div>
          <div>
            {searchedItemsVisible && selected == "albums" && (
              <div ref={browseAlbumsSection}>
                <h1 className="font-bold  text-2xl md:text-4xl px-5 lg:px-0">
                  Browse all albums
                </h1>

                <div className="flex flex flex-wrap lg:justify-start justify-center lg:p-0">
                  {filteredAlbums.map((eachAlbum) => (
                    <div key={eachAlbum.id}>
                      <div className="m-2 ml-0 mr-10 max-w-[200px]  ">
                        <Link
                          to={`/album/${eachAlbum.id}`}
                          state={{ albumId: eachAlbum.id }}
                        >
                          <img
                            src={eachAlbum.albumArt}
                            alt="Image "
                            className="h-[50px] md:h-[250px] md:w-[250px] rounded-3xl block p-0 m-0 object-cover"
                          />

                          <span className="text-[25px] pt-1 mt-2 center block text-center leading-8 font-light ">
                            {eachAlbum.name}
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Browse sections */}
      <div>
        {isAlbumVisible && (
          <div ref={browseArtistSection}>
            <div className="py-6">
              <h1 className="font-bold text-4xl px-5 lg:px-0">
                {" "}
                Browse all artists
              </h1>
              <div className="flex flex flex-wrap lg:justify-start justify-center lg:p-0 ">
                {artistList.map((artist) => (
                  <div
                    key={artist.id}
                    className="flex-cols justify-center w-40 m-4"
                  >
                    <Link
                      to={`/artist/${artist.id}`}
                      state={{ artistId: artist.id }}
                    >
                      <img
                        className="w-40 h-40 rounded-full  object-cover"
                        src={artist.profileImage}
                        alt=""
                      />
                      <h1 className="text-[25px] pt-1 mt-2 center block text-center leading-8 font-light">
                        {artist.name}
                      </h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {isAlbumVisible && (
          <div ref={browseAlbumsSection}>
            <h1 className="font-bold text-4xl px-5 lg:px-0">
              Browse all albums
            </h1>

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
        )}
      </div>
    </>
  );
};

export default Browse;
