/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function PropertyCard({ data }) {
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
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    bathrooms: PropTypes.number,
    bedrooms: PropTypes.number,
    price: PropTypes.number,
    city: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};