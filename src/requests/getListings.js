/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

const getListings = (setListings) => {
  const url = "http://localhost:4000/api/v1/PropertyListing";
  axios
    .get(url)
    .then((response) => {
      const modifiedData = response.data.map((listing) => ({
        ...listing,
        bathrooms: parseInt(listing.bathrooms, 10),
        bedrooms: parseInt(listing.bedrooms, 10),
        price: parseInt(listing.price, 10),
      }));
      setListings(modifiedData);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getListings;
