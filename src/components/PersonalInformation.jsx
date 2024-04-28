import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { getAuth, sendPasswordResetEmail, updateProfile } from "firebase/auth";

const PersonalInformation = () => {
  const [userEmail, setUserEmail] = useState(auth.currentUser.email);
  const [userCurrentPassword, setUserCurrentPassword] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userDisplayName, setUserDisplayName] = useState(
    auth?.currentUser?.displayName
  );
  const [userPhotoUrl, setUserPhotoUrl] = useState(auth.currentUser.photoURL);

  updateProfile();
  return (
    <div>
      <div className="mt-5">
        <div className="relative">
          <input
            type="url"
            className="w-full bg-white h-14 rounded-xl text-black md:pl-[270px] pl-[140px] pr-4  text-xl md:text-2xl"
            value={userPhotoUrl}
            onChange={(e) => {
              setUserPhotoUrl(e.target.value);
            }}
          />
          <span className="absolute inset-y-0 flex items-center  pl-5 pr-8 bg-green-600 font-bold text-base md:text-2xl md:pr-32 text-white rounded-l-xl">
            ImageURL
          </span>
        </div>
      </div>

      <div className="mt-5">
        <div className="relative">
          <input
            type="text"
            className="w-full bg-white h-14 rounded-xl text-black md:pl-[270px] pl-[140px] pr-4  text-xl md:text-2xl"
            value={userDisplayName}
            onChange={(e) => {
              setUserDisplayName(e.target.value);
            }}
          />
          <span className="absolute inset-y-0 flex items-center  pl-5 pr-16 bg-green-600 font-bold text-base md:text-2xl md:pr-44 text-white rounded-l-xl">
            Name
          </span>
        </div>
      </div>
      <div className="mt-5">
        <div className="relative">
          <input
            type="email"
            className="w-full bg-white h-14 rounded-xl text-black md:pl-[270px] pl-[140px] pr-4  text-xl md:text-2xl"
            value={auth.currentUser.email}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <span className="absolute inset-y-0 flex items-center  pl-5 pr-16 bg-green-600 font-bold text-base md:text-2xl md:pr-44 text-white rounded-l-xl">
            Email
          </span>
        </div>
      </div>

      <div className="mt-5">
        <button
          className="rounded-xl font-bold w-full py-2 bg-green-600 text-2xl"
          onClick={(e) => {
            e.preventDefault();

            if (auth?.currentUser) {
              const auth = getAuth();

              if (
                auth.currentUser.displayName !== userDisplayName ||
                auth.currentUser.photoURL !== userPhotoUrl
              ) {
                updateProfile(auth.currentUser, {
                  displayName: userDisplayName,
                  photoURL: userPhotoUrl,
                })
                  .then(() => {
                    // Profile updated!
                    alert("Profile updated successfully!");
                  })
                  .catch((error) => {
                    // Handle error
                    alert("Error updating profile:", error);
                  });
              }

              if (userEmail !== auth.currentUser.email) {
                // Update email
                updateEmail(auth.currentUser, userEmail)
                  .then(() => {
                    // Email updated!
                    alert("Email updated successfully!");
                  })
                  .catch((error) => {
                    // An error occurred
                    alert("Error updating email:", error);
                    // ...
                  });
              }
            }
          }}
        >
          Save Changes
        </button>

        <button
          className="mt-4 rounded-xl font-bold w-full py-2 border-white border-2 hover:bg-green-600 hover:border-green-600 text-2xl"
          onClick={(e) => {
            const auth = getAuth();
            sendPasswordResetEmail(auth, auth.currentUser.email)
              .then(() => {
                alert("Password reset email sent!");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Error sending password reset email:", errorMessage);
                // ..
              });
          }}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
