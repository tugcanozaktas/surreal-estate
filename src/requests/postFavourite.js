import axios from "axios";

const postFavourite = (userId, propertyId) => {
  const url = "http://localhost:4000/api/v1/Favourite";
  const body = {
    propertyListing: propertyId,
    fbUserId: userId,
  };
  axios
    .post(url, body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default postFavourite;
