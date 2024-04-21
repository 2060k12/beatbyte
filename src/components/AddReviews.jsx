import React, { useState } from "react";
import { auth } from "../config/firebase";
import { addDoc, collectionGroup, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { collection } from "firebase/firestore";

const AddReviews = ({ albumId, thisAlbumName }) => {
  const [comment, setComment] = useState("");

  return (
    <>
      <div className=" w-1/2 border-2 p-4 rounded-lg">
        <h1 className="text-4xl font-bold">Your Rating</h1>
        <h2 className="text-2xl">Leave your review</h2>
        <input
          type="text"
          placeholder="Enter your reviews"
          onChange={(event) => {
            setComment(event.target.value);
          }}
          className="h-16 border-2 border-white w-full p-2 mt-4 text-xl"
        />

        <br />
        <br />
        <button
          onClick={async () => {
            // Add a new document in collection "cities"
            await addDoc(collection(db, "reviews", albumId, "reviews"), {
              albumName: thisAlbumName,
              comment: comment,
              rating: "2",
              userEmail: auth.currentUser.email,
              userName: auth.currentUser.email,
            });
          }}
          className="bg-green-500 text-3xl px-5 py-1 rounded-xl"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddReviews;
