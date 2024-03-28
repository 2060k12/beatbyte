import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="mt-5" />
      <div className="py-6 font-semibold ">
        <ul className="flex flex-row justify-center gap-3">
          <li>Help</li>
          <li>Terms & condition</li>
          <li>Contact US</li>
          <li>FAQ</li>
        </ul>
        <ul className="flex flex-row justify-center gap-3">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>TikTok</li>
        </ul>

        <h1 className="text-center text-3xl font-bold text-[#09E85E]">
          BeatByte
        </h1>
        <p className="text-center text-base font-normal ">
          {" "}
          © 2024, BeatByte. All right reserved
        </p>
        <p className="text-center font-normal text-base text-opacity-52">
          Information provided on this website is based on Wikipedia.
        </p>
      </div>
    </>
  );
};

export default Footer;
