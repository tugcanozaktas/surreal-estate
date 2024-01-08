/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import getListings from "../requests/getListings";
import Alert from "./Alert";
import getListingsByQuery from "../requests/getListingsByQuery";
import SideBar from "./SideBar";
import "../styles/Properties.css";

function Properties() {
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
        {listings.map((listing) => (
          <PropertyCard key={listing._id} data={listing} />
        ))}
      </div>
      <SideBar className="sidebar" />
    </div>
  );
}

export default Properties;
