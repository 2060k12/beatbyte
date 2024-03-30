import React from "react";

const AlbumTrack = () => {
  return (
    <div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <h1 className="text-4xl font-bold mt-5">About</h1>
          </div>
          <div className="collapse-content">
            <p>
              Queen are a British rock band formed in London in 1970 by Freddie
              Mercury (lead vocals, piano), Brian May (guitar, vocals), and
              Roger Taylor (drums, vocals), later joined by John Deacon (bass).
              Their earliest works were influenced by progressive rock, hard
              rock, and heavy metal, but the band gradually ventured into more
              conventional and radio-friendly works by incorporating further
              styles, such as arena rock and pop rock.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            <h1 className="text-3xl font-bold mt-3">Track</h1>
          </div>
          <div className="collapse-content">
            <p>
              <ol>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
              </ol>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            <h1 className="text-3xl font-bold mt-3">More Albums from Queen</h1>{" "}
          </div>
          <div className="collapse-content">
            <p>
              <ol>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
                <li>We Will Rock You </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumTrack;
