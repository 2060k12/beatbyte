import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Firebase listener
      setIsLoggedIn(user !== null); // Update `isLoggedIn` based on user
    });

    return unsubscribe; // Cleanup the listener when the component unmounts
  }, []);

  return (
    <div className="container mx-auto py-6 pb-10">
      <nav className="p-5shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[#09E85E] font-bold  text-4xl lg:text-5xl ">
            BeatByte
          </span>

          <span class="text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon
              name="menu"
              onClick={(e) => {
                e.name === "menu"
                  ? e.target.setAttribute("name", "close")
                  : e.target.setAttribute("name", "menu");
              }}
            ></ion-icon>
          </span>
        </div>
        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
          <li className="text-xl hover:text-[#09E85E]  duration-500 mx-4 my-6 md:my-0">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl hover:text-[#09E85E]  duration-500 mx-4 my-6 md:my-0">
            <Link to="/browse">Browse</Link>
          </li>

          {!isLoggedIn ? (
            <li className="mx-4 text-2xl my-6 md:my-0">
              <Link to="/login" className="text-[#09E85E]">
                Login
              </Link>
            </li>
          ) : (
            <div className=" dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="image"
                    src={
                      auth.currentUser.photoURL ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
                // bg-base-70
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">Not complete</span>
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

                <li>
                  <Link to="/admin" className="justify-between">
                    <button>Admin Panel</button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
