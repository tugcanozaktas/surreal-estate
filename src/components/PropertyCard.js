import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import checkFavouriteExists from "../requests/checkFavouriteExists";

function PropertyCard({ onSaveProperty, data, userId }) {
  const [isFavourite, setIsFaviorite] = useState();
  useEffect(() => {
    checkFavouriteExists(userId, data._id, setIsFaviorite);
  });
  return (
    <div className="property-card">
      <div className="property-card__image">
        <img
          className="house-logo"
          src="https://cdn-icons-png.flaticon.com/512/10751/10751558.png"
          alt="house-logo"
        />
      </div>
      <div className="property-card__title">
        <b>{data.title}</b>
      </div>
      <div className="property-card__type-city">
        <i>
          <div className="property-card__type">{data.type}</div> -
          <div className="property-card__city">{data.city}</div>
        </i>
      </div>
      <div className="property-card__bedrooms">
        <FontAwesomeIcon icon={faBed} />
        {data.bedrooms}
      </div>
      <div className="property-card__bathrooms">
        <FontAwesomeIcon icon={faBath} />
        {data.bathrooms}
      </div>
      <div className="property-card__price">
        <FontAwesomeIcon icon={faSterlingSign} />
        {data.price}
      </div>
      <a href={`mailto:${data.email}`} className="property-card__email">
        <FontAwesomeIcon icon={faEnvelope} /> E-mail
      </a>
      {(() => {
        if (userId && !isFavourite) {
          return (
            <button
              onClick={() => onSaveProperty(data._id)}
              className="favourites-button"
              type="button"
            >
              Save
            </button>
          );
        }
        if (userId && isFavourite) {
          return (
            <button type="button" className="unsave-button">
              Saved
            </button>
          );
        }
        return null;
      })()}
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    bathrooms: PropTypes.number,
    bedrooms: PropTypes.number,
    price: PropTypes.number,
    city: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  userId: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
};
