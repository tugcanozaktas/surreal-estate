/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

const getListingsByQuery = (setListings, search) => {
  let url = `http://localhost:4000/api/v1/PropertyListing`;

  if (search) {
    url = `http://localhost:4000/api/v1/PropertyListing${search}`;
  }

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

export default getListingsByQuery;
