/* eslint-disable react/prop-types */
import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
function FavouriteCard({ favourite, onDelete }) {
  const [isDeleted, setIsDeleted] = useState();
  return !isDeleted ? (
    <div className="favourite-card">
      <h2 className="favourite-title">{favourite.propertyListing.title}</h2>
      <button
        type="button"
        onClick={() => onDelete(favourite._id, setIsDeleted)}
        className="favourite-delete"
      >
        Delete
      </button>
    </div>
  ) : null;
}

export default FavouriteCard;
