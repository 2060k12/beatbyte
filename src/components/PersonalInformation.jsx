import React, { useState } from "react";
import { auth } from "../config/firebase";
import { getAuth, updateProfile } from "firebase/auth";

const PersonalInformation = () => {
  const [userEmail, setUserEmail] = useState(auth.currentUser.email);
  const [userCurrentPassword, setUserCurrentPassword] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const updateProfileInfo = () => {
    // Get the current user
    const user = auth.currentUser;

    // Check if there's a user logged in
    if (user) {
      // Call updateProfile method with the desired changes
      updateProfile(getAuth(), user, {
        displayName: "Pranish Pathak",
        photoURL:
          "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg",
      })
        .then(() => {
          // Profile updated successfully
          alert("Profile Updated");
          console.log(auth.currentUser.displayName);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    } else {
      // No user logged in
      console.error("No user is currently logged in");
    }
  };

  return (
    <div>
      <div className="mt-5">
        <div className="relative">
          <input
            type="email"
            className="w-full bg-white h-14 rounded-xl text-black pl-[270px] pr-4  text-2xl"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <span className="absolute inset-y-0 flex items-center bg-transparent pl-5 pr-44 bg-green-600 font-bold text-2xl text-white rounded-l-xl">
            Email
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="relative">
          <input
            type="password"
            className="w-full bg-white h-14 rounded-xl text-black pl-[270px] pr-4 text-2xl"
            onChange={(e) => {
              setUserCurrentPassword(e.target.value);
            }}
          />
          <span className="absolute inset-y-0 flex items-center bg-transparent pl-5 pr-7 bg-green-600 font-bold text-2xl text-white rounded-l-xl">
            Current Password
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="relative">
          <input
            type="password"
            className="w-full bg-white h-14 rounded-xl text-black pl-[270px] pr-4 text-2xl"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <span className="absolute inset-y-0 flex items-center bg-transparent pl-5 pr-16 bg-green-600 font-bold text-2xl text-white rounded-l-xl">
            New Password
          </span>
        </div>
      </div>

      <div className="mt-5">
        <button
          className="rounded-xl font-bold w-full py-2 bg-green-600 text-2xl"
          onClick={(e) => {
            e.preventDefault();
            updateProfileInfo();
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
