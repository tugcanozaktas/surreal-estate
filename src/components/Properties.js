/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import PropertyCard from "./PropertyCard";
import getListings from "../requests/getListings";
import "../styles/Properties.css";

function Properties() {
  const [listings, setListings] = useState(null);

  useEffect(() => {
    getListings(setListings);
  }, []);
  if (listings === null) {
    return <p>Loading...</p>;
  }
  return (
    <div className="properties-box">
      {listings.map((listing) => (
        <PropertyCard key={listing._id} data={listing} />
      ))}
    </div>
  );
}

export default Properties;
