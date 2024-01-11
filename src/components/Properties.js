import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import getListingsByQuery from "../requests/getListingsByQuery";
import SideBar from "./SideBar";
import postFavourite from "../requests/postFavourite";
import "../styles/Properties.css";

function Properties({ userId }) {
  const initialState = {
    listings: [],
    alert: {
      message: "",
      success: false,
    },
  };
  const [listings, setListings] = useState(initialState.listings);
  const [alert, setAlert] = useState(initialState.alert);

  const { search } = useLocation();
  const handleSaveProperty = (propertyId) => {
    postFavourite(userId, propertyId);
  };
  useEffect(() => {
    setAlert({ message: "", isSuccess: false });
    getListingsByQuery(setListings, search, setAlert);
  }, [search]);

  if (listings === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="properties">
      <div className="properties-box">
        <Alert message={alert.message} success={alert.isSuccess} />
        {listings.map((listing, index) => (
          <PropertyCard
            onSaveProperty={handleSaveProperty}
            userId={userId}
            key={listing._id}
            data={listing}
            index={index}
          />
        ))}
      </div>
      <SideBar className="sidebar" />
    </div>
  );
}

export default Properties;

Properties.propTypes = {
  userId: PropTypes.string.isRequired,
};
