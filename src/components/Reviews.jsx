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
      <div>
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
                        className="h-20 rounded-xl"
                      />
                    )}
                  </div>
                ))}

                <img src="" alt="" className="h-20 rounded-xl" />

                <div className="px-3">
                  <h1 className=" font-bold text-2xl ">{items.albumName}</h1>
                  <div className="p-0">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked={parseInt(items.rating) === 1}
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked={parseInt(items.rating) === 2}
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked={parseInt(items.rating) === 3}
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked={parseInt(items.rating) === 4}
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked={parseInt(items.rating) === 5}
                      />
                    </div>
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
