import axios from "axios";

const getFavourites = (userId, setFavourites) => {
  const url = "http://localhost:4000/api/v1/Favourite?populate=propertyListing";
  axios
    .get(url)
    .then((response) => {
      const filteredData = response.data.filter(
        (favourite) => favourite.fbUserId === userId,
      );
      setFavourites(filteredData);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getFavourites;
