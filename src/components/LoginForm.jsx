import React from "react";
import Image from "../assets/image/background.png";

const LoginForm = () => {
  return (
    <>
      <div className="w-[65%] h-[450px]  bg-center bg-[url('/Users/pranish/beatbyte/src/assets/image/background.png')]  rounded-3xl  p-6 ">
        <div className="flex justify-center items-center">
          <form action="post" className="text-xl">
            <h3 className="font-thin text-white ">Start For Free</h3>
            <h1 className="font-bold">Create new account</h1>
            <h3>Already a member? Log In</h3>

            <input
              type="text"
              name="firstName"
              id="fistName"
              className="bg-white mb-3 pl-2 mr-[15px] w-[110px]"
              placeholder="First Name"
            />

            <input
              type="text"
              name="lastName"
              id="lastName"
              className="bg-white border-solid mb-3 ml-[15px] pl-2 w-[110px]"
              placeholder="Last Name"
            />

            <input
              type="email"
              name="email"
              id="email"
              className="bg-white mb-3 w-full block pl-2"
              placeholder="Email"
            />

            <input
              type="password"
              name="password"
              id="password"
              className="bg-white  mb-3  w-full block pl-2"
              placeholder="Password"
            />

            <input
              type="submit"
              value="Create account"
              className=" bg-[#09E85E] text-black font-bold w-full"
            />
          </form>

          <div>
            <img
              src="https://loremflickr.com/500/500"
              alt=""
              className="w-[250px] ml-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
