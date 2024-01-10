/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line no-unused-vars
function FavouriteCard({ favourite, onDelete }) {
  return (
    <div className="favourite-card">
      <h2 className="favourite-title">{favourite.propertyListing.title}</h2>
      <button
        type="button"
        onClick={() => onDelete(favourite._id)}
        className="favourite-delete"
      >
        Delete
      </button>
    </div>
  );
}

export default FavouriteCard;
