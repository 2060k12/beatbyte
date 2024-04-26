import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";

const Favorite = () => {
  const favCollectionRef = collection(
    db,
    "users",
    auth.currentUser.uid,
    "favourites"
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

  return (
    <div className="mt-10">
      <ul className="text-2xl">
        {favList.map((fav) => (
          <div key={fav.id}>
            <li>{fav.track}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
