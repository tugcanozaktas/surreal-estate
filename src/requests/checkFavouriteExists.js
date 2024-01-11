import axios from "axios";

const checkFavouriteExists = (userId, propertyId, setIsFaviorite) => {
  const url = `http://localhost:4000/api/v1/Favourite/`;
  axios
    .get(url)
    .then((response) => {
      const filteredData = response.data.filter(
        (favourite) =>
          favourite.fbUserId === userId &&
          favourite.propertyListing === propertyId,
      );
      setIsFaviorite(filteredData.length > 0);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default checkFavouriteExists;
