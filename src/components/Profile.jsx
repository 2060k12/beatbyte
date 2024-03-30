import React from "react";

const Profile = () => {
  return (
    <>
      <div className="py-5">
        {/* Creating a profile for the user */}
        <div className="flex justify-center items-center">
          <img
            src="https://loremflickr.com/200/200"
            alt="Profile Image for the user"
            className="h-40 block m-0 text-center rounded-full"
          />
        </div>
        <h1 className="font-bold pt-1 m-0 block text-center text-2xl">
          John Doe
          <br />{" "}
          <p className="font-thin text-base">
            If you cannot be a poem, be a poet.{" "}
          </p>
        </h1>
      </div>

      <div className="flex flex-row justify-center gap-20 content-center">
        <h2>Review</h2>
        <h2>favorites </h2>
        <h2>Personal Information </h2>
      </div>
    </>
  );
};

export default Profile;
