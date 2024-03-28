import React from "react";
import Image from "../assets/image/background.png";

const LoginForm = () => {
  return (
    <>
      <div className=" w-[982px] h-[530px] bg-center bg-[url('src/assets/image/background.png')]  rounded-3xl p-6 m-auto">
        <div className="flex justify-evenly content-center place-items-center h-full">
          <form action="post" className="text-xl">
            <div className="mb-4">
              <h3 className="font-thin text-3xl text-white text-opacity-60 leading-11 ">
                START FOR FREE
              </h3>
              <h1 className="font-bold text-5xl text-white leading-10">
                Create new account
              </h1>
              <h3 className="font-thin text-3xl text-white text-opacity-60 leading-11 ">
                Already a member? <span className="text-[#09E85E]">Log In</span>
              </h3>
            </div>
            <input
              type="text"
              name="firstName"
              id="fistName"
              className="bg-white bg-opacity-20  text-[#d4d4d4] rounded-lg mb-3 mr-3 px-3 h-[50px] w-[250px]"
              placeholder="First Name"
            />

            <input
              type="text"
              name="lastName"
              id="lastName"
              className="bg-white bg-opacity-20 h-[50px]  text-[#d4d4d4] rounded-lg mb-3 ml-[15px] pl-2 w-[250px]"
              placeholder="Last Name"
            />

            <input
              type="email"
              name="email"
              id="email"
              className="bg-white bg-opacity-20 h-[50px]  text-[#d4d4d4] rounded-lg mb-3 w-full block pl-2"
              placeholder="Email"
            />

            <input
              type="password"
              name="password"
              id="password"
              className="bg-white bg-opacity-20 h-[50px]  text-[#d4d4d4] rounded-lg mb-3  w-full block pl-2"
              placeholder="Password"
            />

            <input
              type="submit"
              value="Create account"
              className=" bg-[#09E85E] text-black font-bold w-full h-[50px] rounded-lg"
            />
          </form>

          <div className="w-[328px] h-[400px] bg-cover bg-center bg-[url('src/assets/image/albumsMix.png')] rounded-3xl shadow-white drop-shadow-lg ml-3"></div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
