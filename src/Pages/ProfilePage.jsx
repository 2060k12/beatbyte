import React, { useState } from "react";
import Profile from "../components/Profile";
import Reviews from "../components/Reviews";
import PersonalInformation from "../components/PersonalInformation";

import Favorite from "../components/Favorite";

const ProfilePage = () => {
  const [showReviews, setShowReviews] = useState(true);
  const [showFavourates, setShowFavourates] = useState(false);
  const [showPersonalInformation, setShowPersonalInformation] = useState(false);

  return (
    <>
      <Profile />
      <div className="flex flex-row justify-center gap-20 content-center">
        <button
          onClick={() => {
            setShowReviews(true);
            setShowFavourates(false);
            setShowPersonalInformation(false);
          }}
        >
          Reviews
        </button>

        <button
          onClick={() => {
            setShowReviews(false);
            setShowFavourates(true);
            setShowPersonalInformation(false);
          }}
        >
          favorites
        </button>

        <button
          onClick={() => {
            setShowReviews(false);
            setShowFavourates(false);
            setShowPersonalInformation(true);
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
