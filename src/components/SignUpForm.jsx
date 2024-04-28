import React, { useRef, useState } from "react";
import Image from "../assets/image/background.png";
import { auth } from "../config/firebase";
import { ThreeDots } from "react-loader-spinner";

import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginForm = () => {
  const [loading, setLoading] = useState(false); // State to control loading spinner

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      {
        auth.currentUser.photoURL =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeDq4l90PXPsdXQKjFX5_Azg0jtSrDiyAbLyDnRziRw&s";
      }
      window.location.href = "/";
    } catch (error) {
      setLoading(false);

      alert(
        "Error! \nSomething went Wrong,\n Please try Again, \nNote: Password Length must be greater than 9. \n Also check your email address"
      );
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
    } catch (error) {
      setLoading(false);
      alert("Error! Invalid Credentials");
    }
  };

  return (
    <>
      <div className=" login_form w-[982px] h-[530px] bg-center  rounded-3xl p-6 m-auto">
        <div className="flex justify-evenly content-center place-items-center h-full">
          <div className="text-xl">
            <div className="mb-4">
              <h3 className="font-thin text-3xl text-white text-opacity-60 leading-11 ">
                START FOR FREE
              </h3>
              <h1 className="font-bold text-5xl text-white leading-10">
                Create new account
              </h1>
              <h3 className="font-normal text-3xl text-white text-opacity-60 leading-11 ">
                Forgot Password?
                <span
                  className="text-[#09E85E] cursor-pointer hover:text-green-200 ml-2 hover:border-b-2 "
                  onClick={(e) => {
                    const auth = getAuth();

                    if (email.trim() === "") {
                      alert("Please enter an email address");
                      return;
                    }
                    sendPasswordResetEmail(auth, email)
                      .then(() => {
                        alert("Password reset email sent!");
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert(
                          "Error sending password reset email:",
                          errorMessage
                        );
                        // ..
                      });
                  }}
                >
                  Reset Now
                </span>
              </h3>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white bg-opacity-20 h-[50px]  text-[#000] rounded-lg mb-3 w-full block pl-2 hover:bg-white hover:text-black hover:border-transparent"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white bg-opacity-20 h-[50px]  text-[#d4d4d4] rounded-lg mb-3  w-full block pl-2 hover:bg-white hover:text-black hover:border-transparent"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={signIn}
              className=" bg-[#09E85E] font-bold text-black w-full h-[50px] rounded-lg  hover:bg-green-400"
            >
              Login
            </button>
            <button
              type="button"
              onClick={signUp}
              className=" bg-transparent border border-2 text-white font-bold w-full h-[50px] rounded-lg mt-2 hover:bg-green-400 hover:text-black hover:border-transparent"
            >
              Sign Up{" "}
            </button>
            {loading && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ThreeDots className="bg-transparent" />
              </div>
            )}{" "}
            {/* Display loading spinner in the center of the screen when loading state is true */}
            {/* Display loading spinner when loading state is true */}
          </div>

          <div className="w-[328px] h-[400px] bg-cover bg-center bg-[url('./assets/image/albumsMix.png')] rounded-3xl shadow-white drop-shadow-lg ml-3"></div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
