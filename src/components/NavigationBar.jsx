import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { signOut } from "firebase/auth";

const NavigationBar = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Firebase listener
      setIsLoggedIn(user !== null); // Update `isLoggedIn` based on user
    });

    return unsubscribe; // Cleanup the listener when the component unmounts
  }, []);

  let profileImage = "https://avatars.githubusercontent.com/u/84684716?v=4";

  return (
    <>
      <div className="container mx-auto   ">
        <div className=" font-bold text-lg flex justify-between items-baseline pt-4 pb-12  ">
          <span className="text-[#09E85E] text-5xl "> BeatByte</span>
          <div className="text-3xl flex items-center gap-[4vw]">
            <Link to="/"> Home</Link>
            <Link to="/browse"> Browse</Link>
            <Link to="/news"> News</Link>
            <Link to="/search"> Search</Link>
            {!isLoggedIn ? (
              <Link to="/login" className="text-[#09E85E]">
                Login
              </Link>
            ) : (
              <div>
                {" "}
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="image" src={profileImage} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button
                        onClick={async () => {
                          try {
                            await signOut(auth);
                            setIsLoggedIn(false);
                          } catch (error) {
                            error;
                          }
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
