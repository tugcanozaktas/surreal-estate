import axios from "axios";

const deleteFavouriteById = (id) => {
  const url = `http://localhost:4000/api/v1/Favourite/${id}`;
  axios
    .delete(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default deleteFavouriteById;
