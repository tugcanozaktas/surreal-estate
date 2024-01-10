import axios from "axios";

const getFavourites = (setFavourites) => {
  const url = "http://localhost:4000/api/v1/Favourite?populate=propertyListing";
  axios
    .get(url)
    .then((response) => {
      setFavourites(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getFavourites;
