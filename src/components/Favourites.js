/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getFavourites from "../requests/getFavourites";
import FavouriteCard from "./FavouriteCard";
import "../styles/Favourites.css";
import deleteFavouriteById from "../requests/deleteFavouriteById";

function Favourites({ userId }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getFavourites(userId, setFavourites);
  }, []);

  const handleDelete = (id) => {
    deleteFavouriteById(id);
  };
  return (
    <div>
      {userId ? (
        <div className="favourites-page">
          {favourites.map((favourite) => (
            <FavouriteCard
              onDelete={handleDelete}
              key={favourite._id}
              favourite={favourite}
            />
          ))}
        </div>
      ) : (
        <h2>Log in to see your favourite properties...</h2>
      )}
    </div>
  );
}

export default Favourites;

Favourites.propTypes = {
  userId: PropTypes.string.isRequired,
};
