import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";

const Favorite = () => {
  const favCollectionRef = collection(
    db,
    "users",
    auth.currentUser.uid,
    "favorites"
  );
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const getFav = async () => {
      try {
        const data = await getDocs(favCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFavList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getFav();
  }, []);

  const removeFromFavorites = async (id) => {
    try {
      // Delete the document from Firestore using its ID
      await deleteDoc(doc(favCollectionRef, id));
      // Update the state to remove the track from the list
      setFavList(favList.filter((fav) => fav.id !== id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div className="text-2xl border-2 border-white my-10">
      <div>
        {favList.length === 0 && (
          <div className="text-2xl text-center mt-10">No favorites yet</div>
        )}
      </div>
      <div className="my-10 mx-10">
        <ul className="text-2xl">
          {favList.map((fav) => (
            <div key={fav.id} className="flex flex-row">
              <li className="w-2/3">{fav.track}</li>
              <button
                onClick={() => removeFromFavorites(fav.id)}
                className="flex justify-end"
              >
                {" "}
                <ion-icon name="heart"></ion-icon>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;
