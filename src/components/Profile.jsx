import React, { useState, useEffect } from "react";
import { auth } from "../config/firebase";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {currentUser && (
        <div className="py-5">
          {/* Creating a profile for the user */}
          <div className="flex justify-center items-center">
            <img
              src={
                currentUser.photoURL
                  ? currentUser.photoURL
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              alt="Profile Image for the user"
              className="h-40 block m-0 text-center rounded-full"
            />
          </div>
          <h1 className="font-bold pt-1 m-0 block text-center text-2xl">
            {currentUser.email}
            <br />
            <p className="font-thin text-base">
              If you cannot be a poem, be a poet.{" "}
            </p>
          </h1>
        </div>
      )}
    </>
  );
};

export default Profile;
