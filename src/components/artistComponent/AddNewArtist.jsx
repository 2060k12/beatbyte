import React, { useRef, useState } from "react";
import { addDoc, collectionGroup, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { collection } from "firebase/firestore";

const AddNewArtist = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [artistName, setArtistName] = useState("");
  const [about, setAbout] = useState("");
  const [activeYears, setActiveYears] = useState("");
  const [genres, setGenres] = useState("");
  const [labels, setLabels] = useState("");
  const [members, setMembers] = useState("");
  const [origin, setOrigin] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <>
      <div>
        <form>
          <div>
            <img
              src={imageUrl ? imageUrl : ""}
              className="w-64 h-64rounded-lg object-contain items-center justify-center mx-auto mt-10 "
            />
            <input
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
              type="url"
              name="imageUrl"
              id="imageUrl"
              className="my-4 border-2 text-white p-2 px-4 w-full text-black  rounded-lg text-2xl"
              placeholder="Image Url"
            />
          </div>
          <div className="grid grid-cols-2 my-2 border-2 p-5 rounded-lg">
            <div className=" ">
              <label className="text-2xl" htmlFor="artistName">
                Name:
              </label>
              <input
                onChange={(e) => {
                  setArtistName(e.target.value);
                }}
                type="text"
                name="artistName"
                id="artistName"
                className=" p-2 border-2 w-2/3 text-white ml-4 rounded-lg"
              />
            </div>
            <div>
              <label className="text-2xl">Active Years:</label>
              <input
                onChange={(e) => {
                  setActiveYears(e.target.value);
                }}
                type="text"
                className="border-2 text-white p-2 w-2/3 text-black ml-4 rounded-lg"
              />
            </div>
          </div>
          <br />{" "}
          <textarea
            placeholder="Enter about the artist"
            className="border-2 text-white p-2 px-4 text-black rounded-lg text-2xl w-full"
            name="about"
            id="about"
            cols="30"
            rows="3"
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          ></textarea>
          <div className="grid grid-cols-2 gap-4 my-5 border-2 p-5 rounded-lg">
            <div className="flex items-center justify-between">
              <label htmlFor="genres" className="text-2xl mr-2">
                Genres:
              </label>
              <input
                id="genres"
                onChange={(e) => setGenres(e.target.value)}
                type="text"
                className="border-2 text-white p-2 w-2/3  text-black rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="labels" className="text-2xl mr-2">
                Labels:
              </label>
              <input
                id="labels"
                onChange={(e) => setLabels(e.target.value)}
                type="text"
                className="border-2 text-white p-2 w-2/3 text-black rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="members" className="text-2xl mr-2">
                Members:
              </label>
              <input
                id="members"
                onChange={(e) => setMembers(e.target.value)}
                type="text"
                className="border-2 text-white w-2/3 p-2 text-black rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="origin" className="text-2xl mr-2">
                Origin:
              </label>
              <input
                id="origin"
                onChange={(e) => setOrigin(e.target.value)}
                type="text"
                className="border-2 text-white p-2 w-2/3 text-black rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="website" className="text-2xl mr-2">
                Website:
              </label>
              <input
                id="website"
                onChange={(e) => setWebsite(e.target.value)}
                type="url"
                className="border-2 text-white p-2 w-2/3 text-black rounded-lg"
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg- bg-green-500 rounded-xl text-2xl w-full"
            onClick={async (e) => {
              e.preventDefault();
              await addDoc(collection(db, "artist"), {
                profileImage: imageUrl,
                name: artistName,
                about: about,
                activeYears: activeYears,
                genres: genres,
                labels: labels,
                members: members,
                origin: origin,
                website: website,
              });

              await addDoc(collection(db, "artist", "albums"), {
                artistName: artistName,
                albumName: "Album name",
                albumArt: "Album art",
                releaseDate: "Release date",
              });
              window.location.reload();
            }}
          >
            Add New Artist
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewArtist;
