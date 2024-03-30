import React, { useEffect, useState } from "react";

const AlbumArtHome = () => {
  return (
    <>
      <div className="inline-block m-2 ml-0 mr-10 max-w-[200px]  ">
        <img
          src="https://loremflickr.com/500/500"
          alt="Image "
          className="h-[200px] rounded-3xl block p-0 m-0"
        />

        <span className="text-2xl pt-1 mt-2 center block text-center leading-7 ">
          Dark side of the moon
        </span>
      </div>
    </>
  );
};

export default AlbumArtHome;
