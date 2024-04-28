import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { getDocs, collection, collectionGroup } from "firebase/firestore";

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [albumsList, setAlbumList] = useState([]);

  //for reviews
  const reviewsCollectionRef = collectionGroup(db, "reviews");
  const albumCollectionRef = collectionGroup(db, "albums");

  useEffect(() => {
    const getReviews = async () => {
      //read the data
      //set the reviews list

      try {
        const data = await getDocs(reviewsCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setReviewsList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getReviews();

    const getAlbumCollection = async () => {
      //read the data
      //set the album list

      try {
        const data = await getDocs(albumCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAlbumList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getAlbumCollection();
  }, []);

  return (
    <>
      <div className="text-2xl border-2 border-white my-10 px-5 py-10">
        <div>{reviewsList.length === 0 && <div> No Reviews yet </div>}</div>
        {reviewsList.map((items) => (
          <div key={items.userEmail}>
            {items.userEmail == auth.currentUser.email && (
              <div className="flex flex-row py-4 ml-4">
                {/* album art */}

                {albumsList.map((newItems) => (
                  <div key={newItems.id}>
                    {newItems.name?.toLowerCase() ==
                      items.albumName?.toLowerCase() && (
                      <img
                        src={newItems.albumArt}
                        alt=""
                        className="h-28 rounded-xl w-28"
                      />
                    )}
                  </div>
                ))}

                <img src="" alt="" className="h-20 rounded-xl" />

                <div className="px-3">
                  <h1 className=" font-bold text-2xl ">{items.albumName}</h1>
                  <div className="p-0">
                    {[...Array(5)].map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                        <button
                          key={ratingValue}
                          className={`text-xl focus:outline-none ${
                            ratingValue <= items.rating
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }`}
                        >
                          ★
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-s">{items.comment}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
