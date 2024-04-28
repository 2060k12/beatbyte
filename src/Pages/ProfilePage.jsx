import React, { useState } from "react";
import Profile from "../components/Profile";
import Reviews from "../components/Reviews";
import PersonalInformation from "../components/PersonalInformation";

import Favorite from "../components/Favorite";
import { set } from "firebase/database";

const ProfilePage = () => {
  const [showReviews, setShowReviews] = useState(true);
  const [showFavourates, setShowFavourates] = useState(false);
  const [showPersonalInformation, setShowPersonalInformation] = useState(false);
  const [selected, setSelected] = useState("reviews");

  const [selectedStyle, setSelectedStyle] = useState(
    "text-base md:text-2xl text-green-600 duration-1000 ease-in-out border-b-2 border-green-600"
  );

  return (
    <>
      <Profile />
      <div className="flex flex-row justify-center  gap-5  md:gap-10 content-center">
        <button
          className={
            selected === "reviews" ? selectedStyle : "text-base md:text-2xl"
          }
          onClick={() => {
            setShowReviews(true);
            setShowFavourates(false);
            setShowPersonalInformation(false);
            setSelected("reviews");
          }}
        >
          Reviews
        </button>

        <button
          className={
            selected === "favorites" ? selectedStyle : "text-base md:text-2xl"
          }
          onClick={() => {
            setShowReviews(false);
            setShowFavourates(true);
            setShowPersonalInformation(false);
            setSelected("favorites");
          }}
        >
          favorites
        </button>

        <button
          className={
            selected === "personal" ? selectedStyle : "text-base md:text-2xl"
          }
          onClick={() => {
            setShowReviews(false);
            setShowFavourates(false);
            setShowPersonalInformation(true);
            setSelected("personal");
          }}
        >
          Personal Information
        </button>
      </div>

      {showReviews && <Reviews />}
      {showFavourates && <Favorite />}
      {showPersonalInformation && <PersonalInformation />}
    </>
  );
};

export default ProfilePage;
