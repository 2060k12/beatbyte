import React, { useState, useEffect } from "react";
import { addDoc, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { collection } from "firebase/firestore";
import { set } from "firebase/database";

const AddNewAlbum = () => {
  const artistCollectionRef = collection(db, "artist");
  const [artistList, setArtistList] = useState([]);

  const [selectedArtist, setSelectedArtist] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [albumArt, setAlbumArt] = useState("");
  const [studio, setStudio] = useState("");
  const [length, setLength] = useState("");
  const [label, setLabel] = useState("");
  const [about, setAbout] = useState("");
  const [genre, setGenre] = useState("");
  const [tracks, setTracks] = useState([]);
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
    <div className="grid grid-cols-2 gap-4 my-10">
      <div className="flex flex-row justify-between">
        <label className="text-2xl" htmlFor="albumName">
          Album Name
        </label>
        <input
          type="text"
          id="albumName"
          name="albumName"
          placeholder="Album Name"
          className="border-2  border-white rounded-md text-2xl w-2/3 px-3"
          onChange={(e) => {
            setAlbumName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        <label className="text-2xl" htmlFor="albumArtist">
          Album Artist
        </label>
        <select
          placeholder="Select Artist"
          className="text-white text-2xl border-2 w-2/3 rounded-md px-3"
          name="artistName"
          id="dropDown"
          onChange={(e) => setSelectedArtist(e.target.value)}
        >
          <option value="" disabled selected hidden>
            Please Choose Artist...
          </option>

          {artistList.map((artist) => (
            <option key={artist.id} value={artist.id}>
              {artist.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row justify-between">
        <label className="text-2xl" htmlFor="albumArt">
          Album Art
        </label>
        <input
          type="url"
          id="albumArt"
          name="albumArt"
          placeholder="Album Art"
          className="border-2 border-white rounded-md text-2xl w-2/3 px-3"
          onChange={(e) => {
            setAlbumArt(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        <label className="text-2xl" htmlFor="genre">
          Album Genre
        </label>
        <input
          type="text"
          id="genre"
          name="genre"
          placeholder="Album Genre"
          className="border-2 border-white rounded-md text-2xl w-2/3 px-3"
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        <label className="text-2xl" htmlFor="released">
          Album Year
        </label>
        <input
          type="text"
          id="released"
          name="released"
          placeholder="Album Year"
          className="border-2 border-white rounded-md text-2xl w-2/3 px-3"
          onChange={(e) => {
            setReleaseDate(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-row justify-between">
        <label className="text-2xl" htmlFor="length">
          Length
        </label>
        <input
          type="text"
          id="length"
          name="length"
          placeholder="Length"
          className="border-2 border-white rounded-md text-2xl w-2/3 px-3"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        <label className="text-2xl" htmlFor="label">
          Label
        </label>
        <input
          type="text"
          id="label"
          name="label"
          placeholder="Label"
          className="border-2 border-white rounded-md text-2xl w-2/3 px-3"
          onChange={(e) => {
            setLabel(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        <label className="text-2xl" htmlFor="label">
          Studio
        </label>
        <input
          type="text"
          id="label"
          name="studio"
          placeholder="studio"
          className="border-2 border-white rounded-md text-2xl w-2/3 px-3"
          onChange={(e) => {
            setStudio(e.target.value);
          }}
        />
      </div>
      <div className="col-span-2">
        <textarea
          id="about"
          name="about"
          placeholder="Write About the Album"
          className="border-2 border-white rounded-md text-2xl w-full  pt-3 px-3"
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="col-span-2">
        <button
          onClick={() => {
            const temp = [...tracks, []];
            setTracks(temp);
          }}
          className="bg-green-500 w-full text-white rounded-md p-2"
        >
          Add Tracks
        </button>
        {tracks.map((track, i) => {
          return (
            <input
              placeholder={`Track  ${i + 1}`}
              type="text"
              className="border-2 w-1/2  text-white my-2 p-3 "
              onChange={(e) => {
                const temp = [...tracks];
                temp[i] = e.target.value;
                setTracks(temp);
              }}
            />
          );
        })}

        {console.log(tracks)}
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="bg-green-500 w-full text-white rounded-md p-2"
          onClick={async (e) => {
            e.preventDefault();
            // Add a new document in collection "cities"
            await addDoc(collection(db, "artist", selectedArtist, "albums"), {
              name: albumName,
              albumArt: albumArt,
              genre: genre,
              released: releaseDate,
              about: about,
              length: length,
              label: label,
              studio: studio,
              tracks: tracks,
            });
          }}
        >
          Add Album
        </button>
      </div>
    </div>
  );
};

export default AddNewAlbum;
