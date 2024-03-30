import React from "react";

const AlbumAbout = () => {
  return (
    <div className="mb-5">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row   ">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
            <h1 className="text-4xl font-bold">Stream or Buy</h1>
            <p className="py-3">
              Recorded : 6 July
              <br />
              Studio: Sarm East London Wesses
              <br />
              Length: 38:10
              <br />
              Label: EMI, Elektra Producer: Queen, Mike Stone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumAbout;
