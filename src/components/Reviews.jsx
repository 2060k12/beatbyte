import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { getDocs, collection, collectionGroup } from "firebase/firestore";

const Reviews = () => {
  return (
    <>
      <div>
        <div className="flex flex-row py-4 ml-4">
          <img
            src="https://loremflickr.com/200/200"
            alt=""
            className="h-20 rounded-xl"
          />

          <div className="px-3">
            <h1 className=" font-bold ">News of the world</h1>
            <div className="p-0">
              <div className="rating rating-md rating-half">
                <input
                  type="radio"
                  name="rating-10"
                  className="rating-hidden"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                  checked
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
              </div>
            </div>
            <p className="text-s">There will never be something like this.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
